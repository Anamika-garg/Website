import React from "react";
import { FaUsers, FaBriefcase, FaBullhorn, FaShareAlt, FaGift } from "react-icons/fa";

const sponsorData = [
  {
    icon: <FaUsers />,
    title: "Networking Hub",
    description:
      "The AM Developer Community brings together the top 50 Web3 developers across India to exchange ideas, collaborate, and innovate together."
  },
  {
    icon: <FaBriefcase />,
    title: "Recruitment Platform",
    description:
      "Engage with innovative talent from IGDTUW, a vibrant community of 7K+ students, offering greater recruitment opportunities and potential for internships."
  },
  {
    icon: <FaBullhorn />,
    title: "Logo Showcase on Standees",
    description:
      "Increase your brand’s visibility with prominent logo placement on event standees for enhanced recognition."
  },
  {
    icon: <FaShareAlt />,
    title: "Social Media Showcase",
    description:
      "Benefit from exposure across our growing social media platforms: WhatsApp Community, Twitter, Instagram."
  },
  {
    icon: <FaGift />,
    title: "Event Collateral Inclusion",
    description:
      "Showcase your brand through themed goodies, ensuring strong visibility throughout the event and among builders aligned with your track."
  }
];

const Card = ({ icon, title, description }) => (
  <div className="bg-black border-2 border-yellow-400 rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)]">
    <div className="text-yellow-400 mb-4 text-5xl">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-200">{description}</p>
  </div>
);

const Sponsor = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Sponsor Us
        </h2>

        {/* Top row: first 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {sponsorData.slice(0, 3).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>

        {/* Bottom row: last 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-8">
          {sponsorData.slice(3).map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsor;