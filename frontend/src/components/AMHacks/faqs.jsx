import React, { useState } from 'react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who is eligible to participate?",
      answer: "Students currently enrolled in undergraduate programs at recognised Indian colleges or universities are eligible. Accepted degrees include B.Tech, B.Sc, and B.C.A."
    },
    {
      question: "What is the team size requirement?",
      answer: "Teams must consist of 2 to 5 members."
    },
    {
      question: "Can team members be from different colleges or specializations?",
      answer: "Yes! Inter-college and inter-specialization teams are completely allowed."
    },
    {
      question: "Is physical presence required for the Final Round?",
      answer: "Yes. A minimum of 2 team members must be physically present at the venue during the Final Round."
    },
    {
      question: "Are proxies or impersonation allowed?",
      answer: "No. Proxies, impersonation, or substitutions are strictly prohibited and will lead to immediate disqualification."
    },
    {
      question: "Will accommodation or travel reimbursement be provided?",
      answer: "No. Accommodation and travel expenses will not be covered by the organizers."
    },
    {
      question: "What documents are required at the venue?",
      answer: "Participants must carry: A valid college ID, and/or A government-issued ID (Aadhaar preferred) Entry will be denied if proper identification is not provided."
    },
    {
      question: "Will there be coding or development time on the finale day?",
      answer: "No. No coding or development time will be provided on the finale day."
    },
    {
      question: "What should teams present to the judges?",
      answer: "Teams must arrive with a fully pre-built project and be ready to demonstrate and explain it to the judges."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='learn-more' className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
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