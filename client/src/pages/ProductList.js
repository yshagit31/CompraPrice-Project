// import React, { useState } from 'react';
// import axios from 'axios';
// import ProductItem from './ProductItem';
// import './ProductList.css'

// function ProductList() {
//     const [query, setQuery] = useState('');
//     const [products, setProducts] = useState([]);

//     const handleSearch = async () => {
//         try {
//             const response = await axios.get(`https://compra-price-api.vercel.app/api/search?q=${query}`);
//             const data = response.data;

//             // Set products directly from the server response
//             setProducts(data.products || []);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//         console.log(products);
//     };

//     return (
//         <div className="container-lg my-4 p-4">
//             <div>
//             <h1 className="mb-4 pt-4">Get the cheapest product, One Simple Search</h1>
//             <div className="input-group mb-4">
//                 <input
//                     className='input-group p-4 mt-4'
//                     type="text"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     placeholder="Search for products..." />
//                 <div className="d-grid gap-2 col-4 mx-auto p-4">
//                     <button className='btn-lg' onClick={handleSearch}>Search</button>
//                 </div>
//             </div>
//             </div>
//             <div className="row">
//                 {products.map((product, index) => (
//                     <div key={index} className="col-lg-4 col-md-6 mb-4">
//                         <ProductItem product={product} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default ProductList;



import React, { useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://compra-price-api.vercel.app/api/search?q=${query}`);
      setProducts(response.data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    }
    setIsLoading(false);
  };

  return (
    <div className="container-lg my-4 p-4">
      <h1 className="mb-4 pt-4">Get the cheapest product, One Simple Search</h1>

      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control p-3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products..."
        />
        <button className="btn btn-lg px-4" onClick={handleSearch}>
          Search
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-light" role="status" />
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-5 text-white">
          <h4>No products found</h4>
          <p>Try searching something else or check your spelling.</p>
        </div>
      ) : (
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;

