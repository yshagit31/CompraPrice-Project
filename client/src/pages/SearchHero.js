import React, { useState } from 'react';
import { TrendingUp, ShoppingBag, DollarSign, Search } from 'lucide-react';
import './SearchHero.css';
import Contact from './Contact';
import Footer from '../components/Footer';

export default function SearchHero({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const popularSearches = [
    'iPhone',
    'Watch',
    'Laptop',
    'Headphones',
    'iPad',
    'AirPods'
  ];

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
    <div className="container text-center my-5 py-5">
      {/* Hero Title */}
      <div className="mb-5">
        <h1 className="display-4 fw-bold text-dark">
          Find the Best <span className="gradient-text">Prices</span> Instantly
        </h1>
        <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
          Compare prices across Amazon and Flipkart in seconds. Save money and time with our intelligent price comparison engine.
        </p>
      </div>

    <form onSubmit={handleSearch} className="mb-5">
        <div className="position-relative mx-auto shadow-sm border border-2 border-light" 
        style={{
          paddingInline: '1.5rem',
          paddingTop: '0.7rem',
          paddingBottom: '0.7rem',
          borderRadius: '1.5rem',
          width: '90%',
        }}
        // style={{ padding: '0.7rem',width: '85%'  }}
        >
            <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for any product..."
            // className="form-control form-control-lg ps-5 pe-5 p-5 rounded-4 form-control border-0 shadow-none"
            className="ps-5 pe-5 p-4 rounded-4 form-control border-0 shadow-none"
            />
            <Search
            className="position-absolute"
            style={{ top: '50%', left: '16px', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#6c757d' }}
            />
            <button
            type="submit"
            className="btn btn-lg position-absolute end-0 top-50 translate-middle-y me-2 px-4 py-2 text-white fw-semibold shadow-sm mr-4"
            style={{
                background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                border: 'none',
                borderRadius:'0.6rem',
            }}
            >
            Search
            </button>
        </div>
        </form>

      {/* Popular Searches */}
      
      <div className="mb-5">
      <p className="text-secondary fw-medium mb-3">Popular searches:</p>
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {popularSearches.map((item) => (
          <button
            key={item}
            className="btn custom-popular-btn px-4 py-2 rounded-pill fw-medium"
            onClick={() => onSearch(item)}
          >
            {item}
          </button>
        ))}
        </div>
      </div>

      {/* Features Section */}
      {/* <div className="row g-4 justify-content-center">
        <div className="col-md-4">
          <div className="feature-card p-4 text-center shadow-sm rounded-4">
            <div className="icon-wrapper bg-gradient-blue mb-3 d-flex justify-content-center align-items-center">
              <TrendingUp className="icon-white text-center" />
            </div>
            <h5 className="fw-semibold text-dark mb-2">Real-time Prices</h5>
            <p className="text-secondary">Get the latest prices updated in real-time from multiple platforms.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="feature-card p-4 text-center shadow-sm rounded-4">
            <div className="icon-wrapper bg-gradient-green mb-3">
              <DollarSign className="icon-white" />
            </div>
            <h5 className="fw-semibold text-dark mb-2">Best Deals</h5>
            <p className="text-secondary">Discover the lowest prices and exclusive deals across platforms.</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="feature-card p-4 text-center shadow-sm rounded-4">
            <div className="icon-wrapper bg-gradient-purple mb-3">
              <ShoppingBag className="icon-white" />
            </div>
            <h5 className="fw-semibold text-dark mb-2">Smart Shopping</h5>
            <p className="text-secondary">Make informed decisions with detailed product comparisons.</p>
          </div>
        </div>
      </div> */}


      <div className="row g-4 justify-content-center">
  <div className="col-md-4">
    <div className="feature-card p-4 text-center shadow-sm rounded-4">
      <div className="icon-wrapper bg-gradient-blue mb-3 d-flex justify-content-center align-items-center">
        <TrendingUp className="icon-white" />
      </div>
      <h5 className="fw-semibold text-dark mb-2">Real-time Prices</h5>
      <p className="text-secondary">Get the latest prices updated in real-time from multiple platforms.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="feature-card p-4 text-center shadow-sm rounded-4">
      <div className="icon-wrapper bg-gradient-green mb-3 d-flex justify-content-center align-items-center">
        <DollarSign className="icon-white" />
      </div>
      <h5 className="fw-semibold text-dark mb-2">Best Deals</h5>
      <p className="text-secondary">Discover the lowest prices and exclusive deals across platforms.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="feature-card p-4 text-center shadow-sm rounded-4">
      <div className="icon-wrapper bg-gradient-purple mb-3 d-flex justify-content-center align-items-center">
        <ShoppingBag className="icon-white" />
      </div>
      <h5 className="fw-semibold text-dark mb-2">Smart Shopping</h5>
      <p className="text-secondary">Make informed decisions with detailed product comparisons.</p>
    </div>
  </div>
</div>

      {/* <Contact></Contact> */}
    </div>
      {/* <Footer/> */}
      </>
  );
}
