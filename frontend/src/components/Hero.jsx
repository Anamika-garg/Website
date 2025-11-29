import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const animationTypes = [
  { rotate: [0, 1.5, 0], x: [0, 5, 0] },
  { rotate: [0, -1.5, 0], x: [0, -5, 0] },
  { rotate: [0, 0.8, -0.8, 0], y: [0, -8, 0] },
  { rotate: [0, 0.5, 0.5, 0], scale: [1, 1.01, 1] }
];

const Hero = () => {
  const [hover, setHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentAnim, setCurrentAnim] = useState(0);

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnim(prev => (prev + 1) % animationTypes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 50,
      y: (e.clientY / window.innerHeight - 0.5) * 50
    });
  };

  function showForm() {
    window.open("/profile", "_blank");
  }

  const onHover = () => {
    setHover(!hover);
  };

  function isPhone() {
    return window.innerWidth <= 768;
  }

  return (
    <>
      <div
        className="hero-bg min-h-screen flex items-center justify-center relative md:w-[90%] self-center mx-auto overflow-hidden text-white w-full"
        onMouseMove={handleMouseMove}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full object-cover h-full z-[1] brightness-[0.9]"
        >
          <source src="/bg-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="inset-0 opacity-10">
          <div className="inset-0 bg-grid-white/[0.05]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 mt-40 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="text-center md:text-left flex items-center justify-center flex-col md:block">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Empowering Students to Shape a Trustworthy
              </motion.h1>

              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#F6B433] to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                World with Web3
              </motion.h2>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link to={'login'}>
                  {/* <button
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    className="px-8 py-3 bg-gradient-to-r from-[#F6B422] to-[#F6B433] rounded-lg font-semibold text-lg hover:from-cyan-400 hover:to-[#F6B433] transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center"
                  >
                    <VscAccount className="mr-2 text-xl" />
                    LOGIN/SIGN UP
                  </button> */}
                  <motion.button
                                  variants={itemVariants}
                                  type="submit"
                                  className="py-3 px-6 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg font-semibold text-lg text-white font-semibold hover:scale-105 active:scale-100 transition-transform duration-300 shadow-lg shadow-yellow-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-yellow-400"
                                >
                                  LOGIN / SIGN UP
                                </motion.button>
                </Link>
              </motion.div>

              <motion.div
                className="flex justify-center md:justify-start space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Icons here */}
              </motion.div>

              <motion.div
                className="flex justify-center md:justify-start space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a href="https://www.instagram.com/assetmerkle.igdtuw/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F6B433] transition-colors duration-300 text-3xl">
                  <FaInstagram />
                </a>
                <a href="https://chat.whatsapp.com/KUvfa2sCnYO8Z8GZ1llj2H" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F6B433] transition-colors duration-300 text-3xl">
                  <FaWhatsapp />
                </a>
                <a href="https://twitter.com/AM_igdtuw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F6B433] transition-colors duration-300 text-3xl">
                  <FaXTwitter />
                </a>
                <a href="https://www.linkedin.com/in/assetmerkle-igdtuw-463560335/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F6B433] transition-colors duration-300 text-3xl">
                  <FaLinkedin />
                </a>
              </motion.div>
            </div>

            <motion.img
              src="/hero.png"
              alt="hero_image"
              className={`w-full ${isPhone() ? 'h-[50vh]' : 'h-[70vh]'} object-contain`}
              initial={{ rotate: 0 }}
              animate={animationTypes[currentAnim]}
              transition={{
                rotate: { duration: 2.5, ease: "easeInOut" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{
                rotate: Math.random() > 0.5 ? 2.5 : -2.5,
                scale: 1.03,
                transition: { type: "spring", stiffness: 200 }
              }}
            />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent pointer-events-none z-[5]" />
      </div>
    </>
  );
};

export default Hero;