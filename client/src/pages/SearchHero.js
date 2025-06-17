// import React, { useState,useEffect } from 'react';
// import { TrendingUp, ShoppingBag, DollarSign, Search, ChevronLeft, ChevronRight } from 'lucide-react';
// import './SearchHero.css';
// import { Features,howItWorksSteps } from '../constants';

// export default function SearchHero({ onSearch }) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeStep, setActiveStep] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const popularSearches = [
//     'iPhone',
//     'Watch',
//     'Laptop',
//     'Headphones',
//     'iPad',
//     'AirPods'
//   ];

//   const handleSearch = () => {
//     if (searchQuery.trim() !== '') {
//       onSearch(searchQuery);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//     const handleStepChange = (index) => {
//     setActiveStep(index);
//     setIsPaused(true); // Pause auto-rotation on manual selection
//   };

//   const handlePrevStep = () => {
//     setActiveStep((prev) => (prev - 1 + howItWorksSteps.length) % howItWorksSteps.length);
//     setIsPaused(true);
//   };

//   const handleNextStep = () => {
//     setActiveStep((prev) => (prev + 1) % howItWorksSteps.length);
//     setIsPaused(true);
//   };
  
//   return (
//     <>
//     <div className="container text-center my-5 py-5">
//       {/* Hero Title */}
//       <div className="mb-5">
//         <h1 className="display-4 fw-bold text-dark">
//           Find the Best <span className="gradient-text">Prices</span> Instantly
//         </h1>
//         <p className="lead text-secondary mx-auto" style={{ maxWidth: '600px' }}>
//           Compare prices across Amazon and Flipkart in seconds. Save money and time with our intelligent price comparison engine.
//         </p>
//       </div>

//     <form onSubmit={handleSearch} className="mb-5">
//         <div className="position-relative mx-auto shadow-sm border border-2 border-light" 
//         style={{
//           paddingInline: '1.5rem',
//           paddingTop: '0.7rem',
//           paddingBottom: '0.7rem',
//           borderRadius: '1.5rem',
//           width: '90%',
//         }}  >
//             <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search for any product..."
//             // className="form-control form-control-lg ps-5 pe-5 p-5 rounded-4 form-control border-0 shadow-none"
//             className="ps-5 pe-5 p-4 rounded-4 form-control border-0 shadow-none"
//             />
//             <Search
//             className="position-absolute"
//             style={{ top: '50%', left: '16px', transform: 'translateY(-50%)', width: '20px', height: '20px', color: '#6c757d' }}
//             />
//             <button
//             type="submit"
//             className="btn btn-lg position-absolute end-0 top-50 translate-middle-y me-2 px-4 py-2 text-white fw-semibold shadow-sm mr-4"
//             style={{
//                 background: 'linear-gradient(to right, #2563eb, #7c3aed)',
//                 border: 'none',
//                 borderRadius:'0.6rem',
//             }}
//             >
//             Search
//             </button>
//         </div>
//         </form>

//       {/* Popular Searches */}
      
//       <div className="mb-5">
//       <p className="text-secondary fw-medium mb-3">Popular searches:</p>
//       <div className="d-flex flex-wrap justify-content-center gap-2">
//         {popularSearches.map((item) => (
//           <button
//             key={item}
//             className="btn custom-popular-btn px-4 py-2 rounded-pill fw-medium"
//             onClick={() => onSearch(item)}
//           >
//             {item}
//           </button>
//         ))}
//         </div>
//       </div>

//         {/* Features  */}
//      <div className="row g-4 justify-content-center">
//       {Features.map((feature,i)=>(
//       <div key={i} className="col-md-4">
//         <div className="feature-card p-4 text-center shadow-sm rounded-4">
//           <div className={`icon-wrapper ${feature.color} mb-3 d-flex justify-content-center align-items-center`}>
//             <feature.icon className="icon-white" />
//           </div>
//           <h5 className="fw-semibold text-dark mb-2">{feature.title}</h5>
//           <p className="text-secondary">{feature.desc}</p>
//         </div>
//       </div>
//       ))};
//       </div>

//       {/* How It Works Section */}

//     {/* <div className="pt-5">
//       <div className="container">
//         <div className="text-center mb-5">
//           <h2 className="fw-bold fs-2 text-dark mb-3">
//             How CompraPrice Works
//           </h2>
//           <p className="fs-5 text-muted mx-auto" style={{ maxWidth: '600px' }}>
//             Simple, fast, and reliable price comparison in just three steps
//           </p>
//         </div>

//         <div className="row justify-content-center text-center">
//           {howItWorksSteps.map((step, index) => (
//             <div key={index} className="col-md-4 mb-4">
//               <div
//                 className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
//                 style={{
//                   width: '64px',
//                   height: '64px',
//                   background: step.gradient,
//                   color: 'white',
//                   fontSize: '1.5rem',
//                   fontWeight: 'bold'
//                 }}
//               >
//                 {step.step}
//               </div>
//               <h5 className="fw-semibold text-dark mb-3">{step.title}</h5>
//               <p className="text-muted">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div> */}













//        <div style={{ paddingTop: '64px' }}>
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 style={{
//               fontSize: '2rem',
//               fontWeight: 'bold',
//               color: '#212529',
//               marginBottom: '16px'
//             }}>
//               How CompraPrice Works
//             </h2>
//             <p style={{
//               fontSize: '1.25rem',
//               color: '#6c757d',
//               maxWidth: '600px',
//               margin: '0 auto'
//             }}>
//               Simple, fast, and reliable price comparison in just three steps
//             </p>
//           </div>

//           <div style={{
//             position: 'relative',
//             overflow: 'hidden',
//             padding: '32px 0',
//             background: '#f8f9fa',
//             borderRadius: '1rem',
//             boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)'
//           }}
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}>
//             {/* Carousel Panels */}
//             {howItWorksSteps.map((step, index) => (
//               <div key={index} style={{
//                 display: activeStep === index ? 'block' : 'none',
//                 opacity: activeStep === index ? 1 : 0,
//                 transition: 'opacity 0.5s ease-in-out',
//                 padding: '24px',
//                 textAlign: 'center'
//               }}>
//                 <div style={{
//                   background: '#ffffff',
//                   border: `4px solid ${step.gradient.split(',')[0].replace('linear-gradient(to right, ', '')}`,
//                   borderRadius: '1rem',
//                   padding: '32px',
//                   maxWidth: '600px',
//                   margin: '0 auto',
//                   boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
//                   transition: 'transform 0.3s'
//                 }}>
//                   <div style={{
//                     width: '100px',
//                     height: '100px',
//                     borderRadius: '50%',
//                     background: step.gradient,
//                     border: '6px solid #ffffff',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     margin: '0 auto 24px',
//                     color: 'white',
//                     fontSize: '2.5rem',
//                     fontWeight: 'bold'
//                   }}>
//                     {step.step}
//                   </div>
//                   <h5 style={{
//                     fontSize: '1.5rem',
//                     fontWeight: '600',
//                     color: '#212529',
//                     marginBottom: '16px'
//                   }}>
//                     {step.title}
//                   </h5>
//                   <p style={{
//                     fontSize: '1rem',
//                     color: '#6c757d',
//                     lineHeight: '1.6',
//                     maxWidth: '400px',
//                     margin: '0 auto'
//                   }}>
//                     {step.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {/* Navigation Arrows */}
//             <button
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 left: '16px',
//                 transform: 'translateY(-50%)',
//                 background: 'linear-gradient(to right, #2563eb, #9333ea)',
//                 border: 'none',
//                 borderRadius: '50%',
//                 width: '40px',
//                 height: '40px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white',
//                 boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
//                 transition: 'background 0.3s',
//                 '@media (max-width: 767px)': { display: 'none' }
//               }}
//               onClick={handlePrevStep}
//               onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #1e40af, #6b21a8)'}
//               onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #2563eb, #9333ea)'}
//             >
//               <ChevronLeft style={{ width: '24px', height: '24px' }} />
//             </button>
//             <button
//               style={{
//                 position: 'absolute',
//                 top: '50%',
//                 right: '16px',
//                 transform: 'translateY(-50%)',
//                 background: 'linear-gradient(to right, #2563eb, #9333ea)',
//                 border: 'none',
//                 borderRadius: '50%',
//                 width: '40px',
//                 height: '40px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white',
//                 boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
//                 transition: 'background 0.3s',
//                 '@media (max-width: 767px)': { display: 'none' }
//               }}
//               onClick={handleNextStep}
//               onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #1e40af, #6b21a8)'}
//               onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, #2563eb, #9333ea)'}
//             >
//               <ChevronRight style={{ width: '24px', height: '24px' }} />
//             </button>

//             {/* Navigation Dots */}
//             <div style={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: '12px',
//               marginTop: '24px'
//             }}>
//               {howItWorksSteps.map((_, index) => (
//                 <button
//                   key={index}
//                   style={{
//                     width: '12px',
//                     height: '12px',
//                     borderRadius: '50%',
//                     background: activeStep === index ? 'linear-gradient(to right, #2563eb, #9333ea)' : '#e5e7eb',
//                     border: 'none',
//                     cursor: 'pointer',
//                     transition: 'background 0.3s'
//                   }}
//                   onClick={() => handleStepChange(index)}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>



      
//     </div>
//       </>
//   );
// }


import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { TrendingUp, ShoppingBag, DollarSign, Search } from 'lucide-react';
import { Features, howItWorksSteps } from '../constants';
import './SearchHero.css';

export default function SearchHero({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleSteps, setVisibleSteps] = useState(0);

  const popularSearches = [
    'iPhone',
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      onSearch(searchQuery);
    }
  };

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
          className="display-4 fw-bold text-dark"
          variants={fadeSlideUp}
        >
          Find the Best{' '}
          <span className="gradient-text">Prices</span>{' '}
          Instantly
        </motion.h1>
        <motion.p
          className="lead text-secondary mx-auto"
          style={{ maxWidth: '600px' }}
          variants={fadeSlideUp}
        >
          Compare prices across Amazon and Flipkart in seconds. Save money and time with our intelligent price comparison engine.
        </motion.p>
      </motion.div>

      {/* Search Form */}
      {/* <motion.form
        onSubmit={handleSearch}
        className="mb-5"
        initial="hidden"
        animate="visible"
        variants={popIn}
      >
        <div
          className="position-relative mx-auto shadow-sm border border-2 border-light"
          style={{
            paddingInline: '1.5rem',
            paddingTop: '0.7rem',
            paddingBottom: '0.7rem',
            borderRadius: '1.5rem',
            width: '90%'
          }}
        >
          <motion.input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for any product..."
            className="ps-5 pe-5 p-4 rounded-4 form-control border-0 shadow-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <Search
            className="position-absolute"
            style={{
              top: '50%',
              left: '16px',
              transform: 'translateY(-50%)',
              width: '20px',
              height: '20px',
              color: '#6c757d'
            }}
          />
          <motion.button
            type="submit"
            className="btn btn-lg position-absolute end-0 top-50 translate-middle-y me-2 px-4 py-2 text-white fw-semibold shadow-sm"
            style={{
              background: 'linear-gradient(to right, #2563eb, #7c3aed)',
              border: 'none',
              borderRadius: '0.6rem'
            }}
            whileHover={{ scale: 1.05, background: 'linear-gradient(to right, #1e40af, #6b21a8)' }}
            transition={{ type: 'spring', stiffness: 360, damping: 12 }}
          >
            Search
          </motion.button>
        </div>
      </motion.form> */}

 <motion.form
        onSubmit={handleSearch}
        className="mb-5"
        initial="hidden"
        animate="visible"
        variants={popIn}
      >
        <div
          className="position-relative mx-auto shadow-sm border border-2 border-light"
          style={{
            paddingInline: '1.5rem',
            paddingTop: '0.7rem',
            paddingBottom: '0.7rem',
            borderRadius: '1.5rem',
            width: '90%'
          }}
        >
          <motion.input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for any product..."
            className="ps-5 pe-5 p-4 rounded-4 form-control border-0 shadow-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <Search
            className="position-absolute"
            style={{
              top: '50%',
              left: '16px',
              transform: 'translateY(-50%)',
              width: '20px',
              height: '20px',
              color: '#6c757d'
            }}
          />
          <motion.button
            type="submit"
            className="btn btn-lg position-absolute end-0 top-50 translate-middle-y me-2 px-4 py-2 text-white fw-semibold shadow-sm mr-4"
            style={{
              background: 'linear-gradient(to right, #2563eb, #7c3aed)',
              border: 'none',
              borderRadius: '0.6rem'
            }}
            whileHover={{ scale: 1.05, background: 'linear-gradient(to right, #1e40af, #6b21a8)' }}
            transition={{ type: 'spring', stiffness: 360, damping: 12 }}
          >
            Search
          </motion.button>
        </div>
      </motion.form>



      {/* Popular Searches */}
      <motion.div
        className="mb-5"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.p
          className="text-secondary fw-medium mb-3"
          variants={fadeSlideUp}
        >
          Popular searches:
        </motion.p>
        <motion.div
          className="d-flex flex-wrap justify-content-center gap-2"
          variants={staggerContainer}
        >
          {popularSearches.map((item, index) => (
            <motion.button
              key={item}
              className="btn custom-popular-btn px-4 py-2 rounded-pill fw-medium"
              onClick={() => onSearch(item)}
              variants={popIn}
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: index * 0.08 }}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Features */}
      <motion.div
        className="row g-4 justify-content-center"
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
              className="feature-card p-4 text-center shadow-sm rounded-4"
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
                className="fw-semibold"
                style={{ fontSize: '1.25rem', color: '#212529' }}
              >
                {feature.title}
              </motion.h5>
              <motion.p
                className="text-secondary"
                style={{ fontSize: '1rem', lineHeight: '1.5' }}
              >
                {feature.desc}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* How It Works Section */}
      {/* <motion.div
        className="pt-5"
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
              style={{ fontSize: '2rem', color: '#212529' }}
              variants={fadeSlideUp}
            >
              How CompraPrice Works
            </motion.h2>
            <motion.p
              className="text-secondary mx-auto"
              style={{ fontSize: '1rem', maxWidth: '500px' }}
              variants={fadeSlideUp}
            >
              Simple, fast, and reliable price comparison in just three steps
            </motion.p>
          </motion.div>

          <div className="bg-light rounded-4 p-4 shadow-sm" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <AnimatePresence>
              {howItWorksSteps.map((step, index) => (
                index < visibleSteps && (
                  <motion.div
                    key={index}
                    className="mb-4 text-center"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.2 }}
                  >
                    <motion.div
                      className="bg-white p-4 rounded-3 shadow-sm"
                      style={{ border: `3px solid ${getFirstGradientColor(step.gradient)}` }}
                      whileHover={{ y: -3, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
                    >
                      <motion.div
                        className="rounded-circle mx-auto mb-3"
                        style={{
                          width: '64px',
                          height: '64px',
                          background: step.gradient,
                          border: '4px solid #ffffff',
                          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '1.5rem',
                          fontWeight: 'bold'
                        }}
                        initial={{ scale: 0.85 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                      >
                        {step.step}
                      </motion.div>
                      <motion.h5
                        className="fw-semibold"
                        style={{ fontSize: '1.25rem', color: '#212529' }}
                      >
                        {step.title}
                      </motion.h5>
                      <motion.p
                        className="text-secondary"
                        style={{ fontSize: '1rem', lineHeight: '1.5', maxWidth: '280px', margin: '0 auto' }}
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
      </motion.div> */}


        <motion.div
        style={{ paddingTop: '48px' }}
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
              style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: '#212529',
                marginBottom: '12px',
                '@media (min-width: 768px)': { fontSize: '2rem' }
              }}
              variants={fadeSlideUp}
            >
              How CompraPrice Works
            </motion.h2>
            <motion.p
              style={{
                fontSize: '1rem',
                color: '#6c757d',
                maxWidth: '500px',
                margin: '0 auto'
              }}
              variants={fadeSlideUp}
            >
              Simple, fast, and reliable price comparison in just three steps
            </motion.p>
          </motion.div>

          <div style={{
            background: '#f8f9fa',
            borderRadius: '1rem',
            padding: '24px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <AnimatePresence>
              {howItWorksSteps.map((step, index) => (
                index < visibleSteps && (
                  <motion.div
                    key={index}
                    style={{
                      marginBottom: '24px',
                      textAlign: 'center'
                    }}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.2 }}
                  >
                    <motion.div
                      style={{
                        background: '#ffffff',
                        border: `3px solid ${getFirstGradientColor(step.gradient)}`,
                        borderRadius: '0.75rem',
                        padding: '20px',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
                      }}
                      whileHover={{ y: -3, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
                    >
                      <motion.div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '50%',
                          background: step.gradient,
                          border: '4px solid #ffffff',
                          boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 12px',
                          color: 'white',
                          fontSize: '1.5rem',
                          fontWeight: 'bold'
                        }}
                        initial={{ scale: 0.85 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 14 }}
                      >
                        {step.step}
                      </motion.div>
                      <motion.h5
                        style={{
                          fontSize: '1.125rem',
                          fontWeight: '600',
                          color: '#212529',
                          marginBottom: '8px'
                        }}
                      >
                        {step.title}
                      </motion.h5>
                      <motion.p
                        style={{
                          color: '#6c757d',
                          fontSize: '0.875rem',
                          lineHeight: '1.5',
                          maxWidth: '280px',
                          margin: '0 auto'
                        }}
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