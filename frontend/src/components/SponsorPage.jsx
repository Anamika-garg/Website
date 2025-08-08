import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Building, MessageSquare, Twitter, Instagram, Linkedin } from 'lucide-react';
import GridBackground from './GridBackground'; // Assuming you have this component

// A reusable component for the form input fields
const FormInput = ({ icon: Icon, ...props }) => (
  <div className="relative w-full">
    <div className="absolute top-1/2 left-4 -translate-y-1/2 text-yellow-400/50">
      <Icon size={20} />
    </div>
    <input
      {...props}
      className="w-full bg-black/30 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all duration-300"
    />
  </div>
);

const CollaboratePage = () => {
  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center relative overflow-hidden py-20 px-4">
      {/* Dynamic background */}
      <GridBackground />

      {/* Main "Floating" Glass Card */}
      <motion.div
        className="relative z-10 w-full max-w-4xl bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-yellow-900/10"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="p-8 md:p-12 flex flex-col items-center">

          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">
              Sponsor Us
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl">
            Want to connect your Web3 company with top tech talent? Sponsor Assetmerkle IGDTUW to gain high-visibility placement in our campus events and Twitter Spaces. We've collaborated with industry names like Web3 Samaj and Capex. Partner with us to support innovation and elevate your brand.
            </p>
          </motion.div>

          {/* Form Section */}
          <motion.form
            variants={itemVariants}
            className="w-full max-w-2xl"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput icon={User} type="text" placeholder="Name" required />
              <FormInput icon={Mail} type="email" placeholder="Email" required />
              <FormInput icon={Phone} type="tel" placeholder="Phone No." />
              <FormInput icon={Building} type="text" placeholder="Organisation / Company" />
              
              {/* Text Area spanning full width */}
              <div className="md:col-span-2 relative w-full">
                  <div className="absolute top-4 left-4 text-yellow-400/50 pointer-events-none">
                      <MessageSquare size={20} />
                  </div>
                  <textarea
                      placeholder="Your expectations for our collaboration"
                      rows="4"
                      className="w-full bg-black/30 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all duration-300"
                  ></textarea>
              </div>

              <FormInput icon={Twitter} type="text" placeholder="Twitter Profile URL" />
              <FormInput icon={Instagram} type="text" placeholder="Instagram Profile URL" />
              <FormInput icon={Linkedin} type="text" placeholder="LinkedIn Profile URL" />

              {/* Submit Button spanning full width */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full mt-4 py-3 px-6 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg font-semibold text-lg text-black hover:scale-105 active:scale-100 transition-transform duration-300 shadow-lg shadow-yellow-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-yellow-400"
                >
                  Submit Sponsor Request
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default CollaboratePage;