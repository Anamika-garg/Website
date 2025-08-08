import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const loadingTexts = [
  "Fueling Curiosity...",
  "Building Together...",
  "Exploring Decentralization...",
  "Launching Your Web3 Journey...",
];

const Preloader = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % loadingTexts.length);
    }, 800); // THE FIX: Changed from 1500 to 800 milliseconds

    return () => clearInterval(interval);
  }, []);

  const blockVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: (i) => ({
      scaleX: 1,
      transition: {
        delay: (i * 0.3) + 0.2,
        duration: 0.3,
        ease: 'circOut'
      }
    })
  }

  return (
    <div className="preloader-v2">
      <div className="blockchain-animation">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            <motion.div 
              className="block"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={blockVariants}
            />
            {i < 3 && (
              <motion.div 
                className="line"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="loading-text-container">
        <AnimatePresence mode="wait">
          <motion.p
            key={textIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {loadingTexts[textIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Preloader;