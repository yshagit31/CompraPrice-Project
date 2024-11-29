const axios = require('axios');
const cors = require('cors');

// Utility functions
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const USD_TO_INR = 82;

// Retry mechanism for fetching data
const fetchWithRetry = async (url, options, retries = 3, backoff = 3000) => {
    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        if (retries > 0) {
            await delay(backoff);
            return fetchWithRetry(url, options, retries - 1, backoff * 2);
        } else {
            throw error;
        }
    }
};

// Fetch Flipkart data
const fetchFlipkartData = async (query) => {
    const options = {
        method: 'GET',
        url: 'https://real-time-flipkart-api.p.rapidapi.com/product-search',
        params: { q: query, page: '1', sort_by: 'popularity' },
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'real-time-flipkart-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data.products || [];
    } catch (error) {
        console.error('Error fetching from Flipkart API:', error.message);
        return [];
    }
};

// Fetch Amazon data
const fetchAmazonData = async (query) => {
    const url = 'https://real-time-amazon-data.p.rapidapi.com/search';
    const options = {
        params: {
            query: query,
            page: '1',
            country: 'US',
            sort_by: 'RELEVANCE',
            product_condition: 'ALL'
        },
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
        }
    };

    try {
        const response = await fetchWithRetry(url, options);
        return response.data.products || [];
    } catch (error) {
        console.error('Error fetching from Amazon API:', error.message);
        return [];
    }
};

// Normalize data
const normalizeFlipkartProduct = (product) => ({
    id: product.pid,
    title: product.title,
    price: product.price, // Price is already in INR
    url: product.url,
    image: product.images[0]
});

const normalizeAmazonProduct = (product) => ({
    id: product.asin,
    title: product.product_title,
    price: parseFloat(product.product_price.replace('$', '').replace(',', '')) * USD_TO_INR,
    url: product.product_url,
    image: product.product_photo
});

module.exports = async (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const [flipkartData, amazonData] = await Promise.all([
            fetchFlipkartData(query),
            fetchAmazonData(query)
        ]);

        const combinedProducts = [
            ...flipkartData.map(normalizeFlipkartProduct),
            ...amazonData.map(normalizeAmazonProduct)
        ];

        const sortedProducts = combinedProducts.sort((a, b) => a.price - b.price);

        res.json({ products: sortedProducts });
    } catch (error) {
        console.error('Error in /api/search:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
