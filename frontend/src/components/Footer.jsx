import React from 'react';
import { FaXTwitter, FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

// --- Animation Variants ---
const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2,
        },
    },
};

const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const Footer = () => {
    return (
        <footer className="relative w-full bg-[#2A2007] pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent blur-md"></div>

            <motion.div
                className="container mx-auto max-w-7xl relative z-10"
                variants={footerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <motion.div variants={columnVariants} className="flex flex-col">
                        <Link to={'/'} className="flex items-center gap-3 mb-4">
                            <img src="/logo.png" className='h-10 w-10' alt="Assetmerkle Logo" />
                            <span className="text-xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">
                                Assetmerkle
                            </span>
                        </Link>
                        <p className="text-gray-400 mb-6 text-sm">
                            The first Web3-based club at IGDTUW.
                        </p>
                        <div className="flex space-x-4">
                            <a href='https://x.com/AM_igdtuw' target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"><FaXTwitter size={20} /></a>
                            <a href='https://chat.whatsapp.com/Cp0ppTJBmOS4vgDze8XMPq' target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"><FaWhatsapp size={20} /></a>
                            <a href='https://www.linkedin.com/in/assetmerkle-igdtuw-a1427325a/' target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"><FaLinkedin size={20} /></a>
                            <a href='https://www.instagram.com/assetmerkle.igdtuw/' target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"><FaInstagram size={20} /></a>
                        </div>
                    </motion.div>

                    <motion.div variants={columnVariants}>
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to={'/About'} className="footer-link">About</Link></li>
                            <li><Link to={'/Event'} className="footer-link">Events</Link></li>
                            <li><Link to={'/Team'} className="footer-link">Team</Link></li>
                            <li><Link to={'/FAQ'} className="footer-link">FAQ</Link></li>
                            <li><Link to={'/Docs'} className="footer-link">Docs</Link></li>
                        </ul>
                    </motion.div>

                    <motion.div variants={columnVariants}>
                        <h3 className="text-lg font-semibold mb-4 text-white">Partner with Us</h3>
                        <ul className="space-y-3">
                            <li><Link to={'/collaborate'} className="footer-link">Collaborate</Link></li>
                            <li><Link to={'/sponsor'} className="footer-link">Sponsor Us</Link></li>
                        </ul>
                    </motion.div>

                    <motion.div variants={columnVariants}>
                        <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
                        <a href="mailto:assetmerkle@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 mb-4">
                            assetmerkle@gmail.com
                        </a>
                        <form className="relative flex items-center mt-6">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 transition-all duration-300 pr-12"
                            />
                            <button type="submit" aria-label="Subscribe" className="absolute right-0 h-full w-12 flex items-center justify-center text-gray-400 hover:text-black hover:bg-yellow-400 rounded-r-lg transition-all duration-300">
                                <BsFillSendFill size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>

                <motion.div variants={columnVariants} className="border-t border-white/10 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-center">
                    <p className="text-gray-500 text-sm">
                        Assetmerkle © {new Date().getFullYear()} . All rights reserved.
                    </p>
                </motion.div>
            </motion.div>
        </footer>
    );
};

export default Footer;