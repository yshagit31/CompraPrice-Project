// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence, useInView } from 'framer-motion';
// import { TrendingUp, ShoppingBag, DollarSign, Search } from 'lucide-react';
// import { Features, howItWorksSteps } from '../constants';
// import './SearchHero.css';

// export default function SearchHero({ onSearch }) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [visibleSteps, setVisibleSteps] = useState(0);

//   const popularSearches = [
//     'iPhone',
//     'Watch',
//     'Laptop',
//     'Headphones',
//     'iPad',
//     'AirPods'
//   ];

//   const howItWorksRef = useRef(null);
//   const isInView = useInView(howItWorksRef, { once: false, margin: '-100px' });

//   // Sequential step animation for How It Works
//   useEffect(() => {
//     if (isInView) {
//       const animateSteps = async () => {
//         setVisibleSteps(0);
//         for (let i = 0; i < howItWorksSteps.length; i++) {
//           await new Promise((resolve) => setTimeout(resolve, 800));
//           setVisibleSteps((prev) => prev + 1);
//         }
//         await new Promise((resolve) => setTimeout(resolve, 1500));
//         setVisibleSteps(0);
//       };
//       animateSteps();
//       const interval = setInterval(animateSteps, 3900 + howItWorksSteps.length * 800);
//       return () => clearInterval(interval);
//     }
//   }, [isInView]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim() !== '') {
//       onSearch(searchQuery);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch(e);
//     }
//   };

//   // Safe gradient parsing for border color
//   const getFirstGradientColor = (gradient) => {
//     try {
//       const match = gradient.match(/#[\da-fA-F]{6}/);
//       return match ? match[0] : '#2563eb';
//     } catch {
//       return '#2563eb';
//     }
//   };

//   // Animation variants
//   const fadeSlideUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
//   };

//   const popIn = {
//     hidden: { scale: 0.85, opacity: 0 },
//     visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   const cardSlide = {
//     hidden: { opacity: 0, x: (index) => (index % 2 === 0 ? -80 : 80) },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
//   };

//   return (
//     <div className="container text-center my-5 py-5">
//       {/* Hero Title */}
//       <motion.div
//         className="mb-5"
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//       >
//         <motion.h1
//           className="display-4 fw-bold text-dark"
//           variants={fadeSlideUp}
//         >
//           Find the Best{' '}
//           <span className="gradient-text">Prices</span>{' '}
//           Instantly
//         </motion.h1>
//         <motion.p
//           className="lead text-secondary mx-auto"
//           style={{ maxWidth: '600px' }}
//           variants={fadeSlideUp}
//         >
//           Compare prices across Amazon and Flipkart in seconds. Save money and time with our intelligent price comparison engine.
//         </motion.p>
//       </motion.div>

//       {/* Search Form */}
//       <motion.form
//         onSubmit={handleSearch}
//         className="mb-5"
//         initial="hidden"
//         animate="visible"
//         variants={popIn}
//       >
//         <div
//           className="position-relative mx-auto shadow-sm border border-2 border-light"
//           style={{
//             paddingInline: '1.5rem',
//             paddingTop: '0.7rem',
//             paddingBottom: '0.7rem',
//             borderRadius: '1.5rem',
//             width: '90%'
//           }}
//         >
//           <motion.input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Search for any product..."
//             className="ps-5 pe-5 p-4 rounded-4 form-control border-0 shadow-none"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.3 }}
//           />
//           <Search
//             className="position-absolute"
//             style={{
//               top: '50%',
//               left: '16px',
//               transform: 'translateY(-50%)',
//               width: '20px',
//               height: '20px',
//               color: '#6c757d'
//             }}
//           />
//           <motion.button
//             type="submit"
//             className="btn btn-lg position-absolute end-0 top-50 translate-middle-y me-2 px-4 py-2 text-white fw-semibold shadow-sm mr-4"
//             style={{
//               background: 'linear-gradient(to right, #2563eb, #7c3aed)',
//               border: 'none',
//               borderRadius: '0.6rem'
//             }}
//             whileHover={{ scale: 1.05, background: 'linear-gradient(to right, #1e40af, #6b21a8)' }}
//             transition={{ type: 'spring', stiffness: 360, damping: 12 }}
//           >
//             Search
//           </motion.button>
//         </div>
//       </motion.form>

//       {/* Popular Searches */}
//       <motion.div
//         className="mb-5"
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//       >
//         <motion.p
//           className="text-secondary fw-medium mb-3"
//           variants={fadeSlideUp}
//         >
//           Popular searches:
//         </motion.p>
//         <motion.div
//           className="d-flex flex-wrap justify-content-center gap-2"
//           variants={staggerContainer}
//         >
//           {popularSearches.map((item, index) => (
//             <motion.button
//               key={item}
//               className="btn custom-popular-btn px-4 py-2 rounded-pill fw-medium"
//               onClick={() => onSearch(item)}
//               variants={popIn}
//               whileHover={{ scale: 1.08 }}
//               transition={{ type: 'spring', stiffness: 260, damping: 18, delay: index * 0.08 }}
//             >
//               {item}
//             </motion.button>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* Features */}
//       <motion.div
//         className="row g-4 justify-content-center"
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//       >
//         {Features.map((feature, i) => (
//           <motion.div
//             key={i}
//             className="col-md-4 col-sm-6"
//             variants={cardSlide}
//             custom={i}
//           >
//             <motion.div
//               className="feature-card p-4 text-center shadow-sm rounded-4"
//               whileHover={{ y: -4, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
//               transition={{ type: 'spring', stiffness: 180, damping: 14 }}
//             >
//               <motion.div
//                 className={`icon-wrapper ${feature.color.trim()} mb-3 d-flex justify-content-center align-items-center`}
//                 whileHover={{ scale: 1.08, rotate: 3 }}
//               >
//                 <feature.icon className="icon-white" />
//               </motion.div>
//               <motion.h5
//                 className="fw-semibold"
//                 style={{ fontSize: '1.25rem', color: '#212529' }}
//               >
//                 {feature.title}
//               </motion.h5>
//               <motion.p
//                 className="text-secondary"
//                 style={{ fontSize: '1rem', lineHeight: '1.5' }}
//               >
//                 {feature.desc}
//               </motion.p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* How It Works Section */}
//       <motion.div
//         style={{ paddingTop: '48px' }}
//         ref={howItWorksRef}
//         initial="hidden"
//         animate="visible"
//         variants={staggerContainer}
//       >
//         <div className="container">
//           <motion.div
//             className="text-center mb-5"
//             variants={staggerContainer}
//             initial="hidden"
//             animate="visible"
//           >
//             <motion.h2
//               style={{
//                 fontSize: '1.75rem',
//                 fontWeight: 'bold',
//                 color: '#212529',
//                 marginBottom: '12px',
//                 '@media (min-width: 768px)': { fontSize: '2rem' }
//               }}
//               variants={fadeSlideUp}
//             >
//               How CompraPrice Works
//             </motion.h2>
//             <motion.p
//               style={{
//                 fontSize: '1rem',
//                 color: '#6c757d',
//                 maxWidth: '500px',
//                 margin: '0 auto'
//               }}
//               variants={fadeSlideUp}
//             >
//               Simple, fast, and reliable price comparison in just three steps
//             </motion.p>
//           </motion.div>

//           <div style={{
//             background: '#f8f9fa',
//             borderRadius: '1rem',
//             padding: '24px',
//             boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
//             maxWidth: '700px',
//             margin: '0 auto',
//             minHeight: '300px' // Added to prevent initial empty gap
//           }}>
//             <AnimatePresence>
//               {howItWorksSteps.map((step, index) => (
//                 index < visibleSteps && (
//                   <motion.div
//                     key={index}
//                     style={{
//                       marginBottom: '24px',
//                       textAlign: 'center'
//                     }}
//                     initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                     animate={{ opacity: 1, y: 0, scale: 1 }}
//                     exit={{ opacity: 0, y: -15 }}
//                     transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.2 }}
//                   >
//                     <motion.div
//                       style={{
//                         background: '#ffffff',
//                         border: `3px solid ${getFirstGradientColor(step.gradient)}`,
//                         borderRadius: '0.75rem',
//                         padding: '20px',
//                         boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
//                       }}
//                       whileHover={{ y: -3, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
//                     >
//                       <motion.div
//                         style={{
//                           width: '64px',
//                           height: '64px',
//                           borderRadius: '50%',
//                           background: step.gradient,
//                           border: '4px solid #ffffff',
//                           boxShadow: '0 3px 8px rgba(0, 0, 0, 0.15)',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           margin: '0 auto 12px',
//                           color: 'white',
//                           fontSize: '1.5rem',
//                           fontWeight: 'bold'
//                         }}
//                         initial={{ scale: 0.85 }}
//                         animate={{ scale: 1 }}
//                         transition={{ type: 'spring', stiffness: 260, damping: 14 }}
//                       >
//                         {step.step}
//                       </motion.div>
//                       <motion.h5
//                         style={{
//                           fontSize: '1.125rem',
//                           fontWeight: '600',
//                           color: '#212529',
//                           marginBottom: '8px'
//                         }}
//                       >
//                         {step.title}
//                       </motion.h5>
//                       <motion.p
//                         style={{
//                           color: '#6c757d',
//                           fontSize: '0.875rem',
//                           lineHeight: '1.5',
//                           maxWidth: '280px',
//                           margin: '0 auto'
//                         }}
//                       >
//                         {step.desc}
//                       </motion.p>
//                     </motion.div>
//                   </motion.div>
//                 )
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }



import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { TrendingUp, ShoppingBag, DollarSign, Search } from 'lucide-react';
import { Features, howItWorksSteps } from '../constants';
// import './index.css';
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
          <motion.input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for any product..."
            className="search-hero form-control"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <Search className="search-icon" />
          <motion.button
            type="submit"
            className="search-button"
            whileHover={{ background: 'linear-gradient(to right, #1e40af, #6b21a8)' }}
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