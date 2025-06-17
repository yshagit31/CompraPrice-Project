// import React, { useState } from 'react';
// import axios from 'axios';
// import ProductItem from './ProductItem';
// import './ProductList.css';

// function ProductList({products,isLoading}) {
//   console.log("prducts",products);

//   return (
//     <div className="container-lg my-4 p-4">
//       {isLoading ? (
//         <div className="text-center py-5">
//           <div className="spinner-border text-light" role="status" />
//         </div>
//       ) : products.length === 0 ? (
//         <div className="text-center py-5 text-white">
//           <h4>No products found</h4>
//           <p>Try searching something else or check your spelling.</p>
//         </div>
//       ) : (
//         <div className="row">
//           {products.map((product, index) => (
//             <div key={index} className="col-lg-4 col-md-6 mb-4">
//               <ProductItem product={product} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductList;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import ProductItem from './ProductItem';
import './ProductList.css';

function ProductList({ products, isLoading }) {
  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      className="products-container"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loading"
            className="loading-spinner text-center py-5"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="spinner-border" role="status" />
          </motion.div>
        ) : products.length === 0 ? (
          <motion.div
            key="no-results"
            className="no-results text-center py-5"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h4>No products found</h4>
            <p>Try searching something else or check your spelling.</p>
          </motion.div>
        ) : (
          <motion.div
            key="products"
            className="row"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {products.map((product, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <ProductItem product={product} />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ProductList;