const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config(); 

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'https://compra-price.vercel.app'], 
    methods: ['GET', 'POST'],
    credentials: true, 
}
));

const PORT = 5000;

// Delay function for retry mechanism
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchWithRetry = async (url, options, retries = 3, backoff = 3000) => {
    try {
        const response = await axios.get(url, { headers: options.headers, params: options.params });
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


// Conversion rate from USD to INR
const USD_TO_INR = 82;

// Fetch data from Flipkart API
console.log("API key:",  process.env.RAPIDAPI_KEY_AMAZON);
const fetchFlipkartData = async (query) => {
// console.log("Host:", process.env.REACT_APP_RAPIDAPI_HOST);

    const options = {
        method: 'GET',
        url: 'https://real-time-flipkart-api.p.rapidapi.com/product-search',
        params: {
            q: query,
            page: '1',
            sort_by: 'popularity'
        },
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY_FLIPKART,
            'x-rapidapi-host': 'real-time-flipkart-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log("flaipkart response",response);
        return response.data.products || [];
    } catch (error) {
        console.error('Error fetching from Flipkart API:', error.message);
        return [];
    }
};

// Fetch data from Amazon API
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
            'x-rapidapi-key': process.env.RAPIDAPI_KEY_AMAZON,
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

// Normalize Flipkart product data
const normalizeFlipkartProduct = (product) => ({
    id: product.pid,
    title: product.title,
    price: product.price, // Price is already in INR
    url: product.url,
    image: product.images[0] // Use the first image
});

const normalizeAmazonProduct = (product) => {
    let price = 0;
    const rawPrice = product.product_price;
        console.log("raw rpice",rawPrice);
    if (rawPrice !== null && rawPrice !== undefined && typeof rawPrice === 'string' && typeof rawPrice === 'string' && rawPrice.includes('$')) {
        try {
            // price = parseFloat(rawPrice.replace('$', '').replace(',', '')) * USD_TO_INR;
            price = parseFloat(rawPrice.replace('$', '').replace(',', '')); 
        } catch (e) {
            console.warn('⚠️ Error parsing price:', rawPrice, e.message);
        }
    } else {
        console.warn('⚠️ Skipping product with invalid price:', product.product_title);
    }

    console.log("going for return");
    return {
        id: product.asin,
        title: product.product_title,
        price: Number(price.toFixed(2)),
        url: product.product_url,
        image: product.product_photo
    };
};

// API endpoint to search and sort products
app.get('/api/search', async (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        const [flipkartData, amazonData] = await Promise.all([
            fetchFlipkartData(query),
            fetchAmazonData(query)
        ]);
        console.log("amazondata",amazonData);
        console.log("flipkartdata",flipkartData);

        const combinedProducts = [
            ...flipkartData.map(normalizeFlipkartProduct),
            ...amazonData.map(normalizeAmazonProduct)
        ];

       console.log("combined product",combinedProducts);

       const filteredProducts = combinedProducts.filter(p =>
         typeof p.price === 'number' && !isNaN(p.price) && p.price > 0
        );

        const sortedProducts = filteredProducts.sort((a, b) => a.price - b.price);
         console.log("sorted product",sortedProducts);

        res.json({ products: sortedProducts });
    } catch (error) {
        console.error('Error in /api/search:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/test', async (req, res) => {
  console.log('🔥 API HIT on Vercel');
  console.log('🔑 API Key:', process.env.RAPIDAPI_KEY_AMAZON);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
