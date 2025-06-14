// import React from 'react';
// import './ProductItem.css'
// function ProductItem({ product }) {
//     if (!product) {
//         return <p>No product data available</p>;
//     }

//     return (
//         <div className="card h-100">
//             <img className='card-img' src={product.image} alt={product.title} />
//             <div className="card-body">
//                 <a href={product.url} target="_blank" rel="noopener noreferrer" className="stretched-link">
//                     <h5 className="card-title">{product.title}</h5>
//                     <p className="card-text">Price: Rs {product.price}</p>
//                 </a>
//             </div>
//         </div>
//     );
// }

// export default ProductItem;


import React from 'react';
import './ProductItem.css';

function ProductItem({ product }) {
  if (!product || !product.amazon || !product.flipkart) {
    return <p>No product data available</p>;
  }

  const betterDeal = product.amazon.price < product.flipkart.price ? 'amazon' : 'flipkart';
  const getSavings = () => Math.abs(product.amazon.price - product.flipkart.price);

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <div className="card shadow-sm border rounded-4 h-100 p-3">
      <div className="row g-3">
        {/* Image */}
        <div className="col-12 col-lg-4">
          <img src={product.image} className="card-img rounded bg-light p-2" alt={product.name} />
        </div>

        {/* Info */}
        <div className="col-12 col-lg-8 d-flex flex-column justify-content-between">
          <div>
            <span className="badge bg-primary-subtle text-primary mb-2 px-3 py-1 rounded-pill">{product.category}</span>
            <h5 className="fw-bold text-dark">{product.name}</h5>

            <div className="row mt-3">
              {/* Amazon Card */}
              <div className={`col-md-6 border rounded-3 p-3 mb-3 ${betterDeal === 'amazon' ? 'border-success bg-success-subtle' : 'border-secondary-subtle bg-light'}`}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-warning rounded-circle text-white fw-bold d-flex justify-content-center align-items-center" style={{ width: 30, height: 30 }}>
                      A
                    </div>
                    <span className="fw-semibold">Amazon</span>
                    {betterDeal === 'amazon' && (
                      <span className="badge bg-success text-white">Best Price</span>
                    )}
                  </div>
                </div>
                <p className="fs-5 fw-bold text-dark">{formatPrice(product.amazon.price)}</p>
                <p className="mb-1 text-muted small">⭐ {product.amazon.rating} ({product.amazon.reviews} reviews)</p>
                <p className="mb-1 text-muted small">🚚 {product.amazon.delivery}</p>
                <p className="mb-2 text-muted small">🛡️ {product.amazon.seller}</p>
                <a href={product.amazon.url} target="_blank" rel="noopener noreferrer" className="btn btn-warning w-100">
                  View on Amazon
                </a>
              </div>

              {/* Flipkart Card */}
              <div className={`col-md-6 border rounded-3 p-3 mb-3 ${betterDeal === 'flipkart' ? 'border-success bg-success-subtle' : 'border-secondary-subtle bg-light'}`}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center gap-2">
                    <div className="bg-primary rounded-circle text-white fw-bold d-flex justify-content-center align-items-center" style={{ width: 30, height: 30 }}>
                      F
                    </div>
                    <span className="fw-semibold">Flipkart</span>
                    {betterDeal === 'flipkart' && (
                      <span className="badge bg-success text-white">Best Price</span>
                    )}
                  </div>
                </div>
                <p className="fs-5 fw-bold text-dark">{formatPrice(product.flipkart.price)}</p>
                <p className="mb-1 text-muted small">⭐ {product.flipkart.rating} ({product.flipkart.reviews} reviews)</p>
                <p className="mb-1 text-muted small">🚚 {product.flipkart.delivery}</p>
                <p className="mb-2 text-muted small">🛡️ {product.flipkart.seller}</p>
                <a href={product.flipkart.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">
                  View on Flipkart
                </a>
              </div>
            </div>
          </div>

          {/* Savings section */}
          <div className="border-top pt-3 mt-3 text-center bg-light-subtle rounded-3 p-3">
            <p className="mb-1 text-muted small">You can save up to</p>
            <h4 className="fw-bold text-success">{formatPrice(getSavings())}</h4>
            <p className="mb-0 text-muted small">by choosing <span className="fw-semibold text-dark">{betterDeal === 'amazon' ? 'Amazon' : 'Flipkart'}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
