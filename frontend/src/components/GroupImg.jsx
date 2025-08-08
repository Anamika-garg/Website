import React, { useState } from 'react';
import { motion } from 'framer-motion';

// The URL for your main group photo
const groupPhotoUrl = "https://res.cloudinary.com/dalgvlhes/image/upload/v1753780412/im_opeqoj.jpg";

// --- Animation Variants for the title ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const TeamGallery = () => {
  // State to track mouse position for the parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize position from -0.5 to 0.5
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="relative w-full mx-auto bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      onMouseMove={handleMouseMove} // Track mouse movement on the whole section
    >
      <div className="container mx-auto max-w-7xl">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* --- Title --- */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500"
            variants={itemVariants}
          >
            Our Team
          </motion.h1>

          {/* --- Parallax Image Container --- */}
          <motion.div
            className="rounded-2xl shadow-2xl shadow-yellow-900/20"
            variants={itemVariants}
            // Animate the div based on mouse position for the parallax effect
            animate={{
              x: mousePosition.x * -40, // Multiplier controls effect intensity
              y: mousePosition.y * -40,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, mass: 0.1 }}
          >
            <div className="rounded-2xl overflow-hidden border-4 border-white/10">
              <img 
                src={groupPhotoUrl} 
                alt="Our team" 
                className="w-full h-auto object-cover opacity-90 mx-auto" 
              />
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* --- Blending Gradient --- */}
      <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default TeamGallery;