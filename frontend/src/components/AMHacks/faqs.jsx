import React, { useState } from 'react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is AM Hacks?",
      answer: "AM Hacks is AssetMerkle's flagship Web3 hackathon that brings together innovators, developers, and blockchain enthusiasts to build cutting-edge decentralized applications. It's a 36-hour intensive coding marathon featuring mentorship, workshops, and exciting prizes."
    },
    {
      question: "Who can participate in AM Hacks?",
      answer: "AM Hacks is open to all students, developers, and blockchain enthusiasts regardless of their experience level. Whether you're a beginner exploring Web3 or an experienced developer, you'll find exciting challenges and learning opportunities. Teams of 2-4 members are encouraged to participate."
    },
    {
      question: "What are the prize categories?",
      answer: "AM Hacks offers multiple prize tracks including Best Overall Project, Best Web3 Innovation, Best DeFi Solution, Best NFT/Gaming Project, and sponsor-specific bounties. Total prize pool exceeds $10,000 with exclusive swag, mentorship opportunities, and networking with industry leaders."
    },
    {
      question: "Do I need prior blockchain experience?",
      answer: "No prior blockchain experience is required! AM Hacks welcomes participants of all skill levels. We provide pre-hackathon workshops, mentorship sessions, and resources to help you get started with Web3 development. Our mentors are available 24/7 during the event to guide you."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, chargers, and enthusiasm! We'll provide high-speed internet, power outlets, meals, snacks, and beverages throughout the event. Don't forget your student ID for registration and any hardware you plan to use for your project."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold text-center mb-16" style={{ color: '#F5A623' }}>
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4 transition-transform duration-200 hover:scale-[1.02]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
              >
                <span className="text-xl sm:text-2xl font-normal text-white pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 ease-in-out flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100 transform translate-y-0' 
                    : 'max-h-0 opacity-0 transform -translate-y-2'
                }`}
                style={{
                  transitionTimingFunction: openIndex === index 
                    ? 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' 
                    : 'ease-out'
                }}
              >
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;