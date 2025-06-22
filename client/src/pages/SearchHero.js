import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { TrendingUp, ShoppingBag, DollarSign, Search } from 'lucide-react';
import { Features, howItWorksSteps } from '../constants';
import ProductList from './ProductList';
import axios from 'axios';
// import './index.css';
import './SearchHero.css';

export default function SearchHero({ onSearch }) {
  const [query, setquery] = useState('');
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [hasSearched, setHasSearched] = useState(false);


    const [products, setProducts] = useState([]);
      const [isLoading, setIsLoading] = useState(false);

      // console.log("api",process.env.REACT_APP_LOCAL_API_URL);
    const handleSearch = async (e,directQuery) => {
      e.preventDefault();
      setHasSearched(true);

        const searchTerm = directQuery || query;
  if (!searchTerm.trim()) return;
      setIsLoading(true);
        try {
          //  console.log("api",process.env.REACT_APP_API_URL);
            const response = await axios.get(`${process.env.REACT_APP_LOCAL_API_URL}/search?q=${searchTerm}`);
            // const response = await axios.get(`${process.env.REACT_APP_API_URL}/search?q=${searchTerm}`);
            const data = response.data;
            console.log("data",data.products);
            // Set products directly from the server response
            setProducts(data.products || []);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
        setIsLoading(false);
        // console.log(products);
    };

    useEffect(() => {
  console.log("Updated products:", products);
}, [products]);


  const popularSearches = [
    'Phone',
    'Watch',
    'Laptop',
    'Headphones',
    'iPad',
    'AirPods'
  ];

  const howItWorksRef = useRef(null);
  const isInView = useInView(howItWorksRef, { once: false, margin: '-100px' });

  // Sequential step animation for How It Works
  useEffect(() => {
    if (isInView) {
      const animateSteps = async () => {
        setVisibleSteps(0);
        for (let i = 0; i < howItWorksSteps.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 800));
          setVisibleSteps((prev) => prev + 1);
        }
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setVisibleSteps(0);
      };
      animateSteps();
      const interval = setInterval(animateSteps, 3900 + howItWorksSteps.length * 800);
      return () => clearInterval(interval);
    }
  }, [isInView]);

 

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  // Safe gradient parsing for border color
  const getFirstGradientColor = (gradient) => {
    try {
      const match = gradient.match(/#[\da-fA-F]{6}/);
      return match ? match[0] : '#2563eb';
    } catch {
      return '#2563eb';
    }
  };

  // Animation variants
  const fadeSlideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const popIn = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardSlide = {
    hidden: { opacity: 0, x: (index) => (index % 2 === 0 ? -80 : 80) },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="container text-center my-5 py-5">
      {/* Hero Title */}
      <motion.div
        className="mb-5"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="hero-title"
          variants={fadeSlideUp}
        >
          Find the Best{' '}
          <span className="gradient-text">Prices</span>{' '}
          Instantly
        </motion.h1>
        <motion.p
          className="hero-subtext"
          variants={fadeSlideUp}
        >
          Compare prices across Amazon and Flipkart in seconds. Save money and time with our intelligent price comparison engine.
        </motion.p>
      </motion.div>

      {/* Search Form */}
      <motion.form
        onSubmit={handleSearch}
        className="mb-5"
        initial="hidden"
        animate="visible"
        variants={popIn}
      >
        <div className="search-container">
         <Search className="search-icon" />
          <motion.input
            type="text"
            value={query}
            onChange={(e) => setquery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for any product..."
            className="search-hero form-control"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
   
          <motion.button
            type="submit"
              className={`search-button ${isLoading ? 'disabled' : ''}`}
              disabled={isLoading}
              whileHover={!isLoading && { background: 'linear-gradient(to right, #1e40af, #6b21a8)' }}
            // className="search-button"
            // whileHover={{ background: 'linear-gradient(to right, #1e40af, #6b21a8)' }}
            transition={{ type: 'spring', stiffness: 360, damping: 12 }}
          > 
           {isLoading ? 'Searching...' : 'Search'}
          </motion.button>
        </div>
      </motion.form>


      {/* Popular Searches */}
      <motion.div
        className="m-5"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.p
          className="popular-label"
          variants={fadeSlideUp}
        >
          Popular searches:
        </motion.p>
        <motion.div
          className="popular-buttons"
          variants={staggerContainer}
        >
          {popularSearches.map((item, index) => (
            <motion.button
              key={item}
              className="custom-popular-btn"
              onClick={(e) =>
                {
                   e.preventDefault();
                  setquery(item);
                  handleSearch(e, item);
                }
                }
              variants={popIn}
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: index * 0.08 }}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>


            
      {/* {products.length>0 && <ProductList products={products} isLoading={isLoading}></ProductList>} */}
          {hasSearched && <ProductList products={products} isLoading={isLoading} />}

      {/* Features */}
      <motion.div
        className="row g-4 justify-content-center mt-5"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {Features.map((feature, i) => (
          <motion.div
            key={i}
            className="col-md-4 col-sm-6"
            variants={cardSlide}
            custom={i}
          >
            <motion.div
              className="feature-card"
              whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
              transition={{ type: 'spring', stiffness: 180, damping: 14 }}
            >
              <motion.div
                className={`icon-wrapper ${feature.color.trim()} mb-3 d-flex justify-content-center align-items-center`}
                whileHover={{ scale: 1.08, rotate: 3 }}
              >
                <feature.icon className="icon-white" />
              </motion.div>
              <motion.h5
                className="feature-title"
              >
                {feature.title}
              </motion.h5>
              <motion.p
                className="feature-desc"
              >
                {feature.desc}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        className="how-it-works"
        ref={howItWorksRef}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div
            className="text-center mb-5"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="fw-bold"
              variants={fadeSlideUp}
            >
              How CompraPrice Works
            </motion.h2>
            <motion.p
              className="text-secondary mx-auto"
              variants={fadeSlideUp}
            >
              Simple, fast, and reliable price comparison in just three steps
            </motion.p>
          </motion.div>

          <div className="steps-container">
            <AnimatePresence>
              {howItWorksSteps.map((step, index) => (
                index < visibleSteps && (
                  <motion.div
                    key={index}
                    style={{ textAlign: 'center' }}
                    initial={{ opacity: 0, x: -30, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.2 }}
                  >
                    <motion.div
                      className="step-card"
                      style={{ border: `3px solid ${getFirstGradientColor(step.gradient)}` }}
                      whileHover={{ y: -3, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
                    >
                      <motion.div
                        className="step-circle"
                        style={{ background: step.gradient }}
                        initial={{ scale: 0.85 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                      >
                        {step.step}
                      </motion.div>
                      <motion.h5
                        className="step-title"
                      >
                        {step.title}
                      </motion.h5>
                      <motion.p
                        className="step-desc"
                      >
                        {step.desc}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

