import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Building, MessageSquare, Twitter, Instagram, Linkedin, ChevronRight, ChevronLeft } from 'lucide-react';
import GridBackground from './GridBackground';

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
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
  };

  const handleNext = () => setCurrentStep(1);
  const handlePrev = () => setCurrentStep(0);
  const handleSubmit = (e) => e.preventDefault();

  const steps = [
    {
      title: "Basic Information",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput icon={User} type="text" placeholder="Name" required />
          <FormInput icon={Mail} type="email" placeholder="Email" required />
          <FormInput icon={Phone} type="tel" placeholder="Phone No." />
          <FormInput icon={Building} type="text" placeholder="Organisation / Company" />
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
        </div>
      )
    },
    {
      title: "Social Profiles",
      content: (
        <div className="grid grid-cols-1 gap-6">
          <FormInput icon={Twitter} type="text" placeholder="Twitter Profile URL" />
          <FormInput icon={Instagram} type="text" placeholder="Instagram Profile URL" />
          <FormInput icon={Linkedin} type="text" placeholder="LinkedIn Profile URL" />
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center relative overflow-hidden py-20 px-4">
      <GridBackground />
      
      <motion.div
        className="relative z-10 w-full max-w-4xl bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-yellow-900/10"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="p-8 md:p-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-500">
              Collaborate with Us
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              Be part of the trend with Assetmerkle! We're the most active club on campus, bustling with events, workshops, and a community ready to explore Web3 with you.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {steps.map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                    index <= currentStep ? 'bg-yellow-500 text-black' : 'bg-white/10 text-gray-400'
                  }`}>
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-2 transition-colors ${
                      index < currentStep ? 'bg-yellow-500' : 'bg-white/10'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-yellow-400 mb-6">{steps[currentStep].title}</h2>
              <AnimatePresence mode="wait" custom={currentStep}>
                <motion.div
                  key={currentStep}
                  custom={currentStep}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                >
                  {steps[currentStep].content}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  currentStep === 0
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <ChevronLeft size={20} className="mr-2" />
                Previous
              </button>
              
              {currentStep === steps.length - 1 ? (
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg font-semibold text-black hover:scale-105 transition-transform duration-300 shadow-lg shadow-yellow-500/20"
                >
                  Submit Collaboration Request
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg font-semibold text-black hover:scale-105 transition-transform duration-300 shadow-lg shadow-yellow-500/20"
                >
                  Next
                  <ChevronRight size={20} className="ml-2" />
                </button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default CollaboratePage;