import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const tests = [
    {
      id: 1,
      name: "🥇 Trae Prime Engineers",
      x_id: "$150 Cash Prize",
      rank: "Rank #1",
      quote:
        "💡 Criteria: Meaningful usage of Trae AI IDE throughout development\n" +
        "🎁 Perks: Trae Prime Engineer Title & Engineering Excellence Award\n" +
        "🚀 Focus: Showcasing a 10× AI-powered engineering workflow\n" +
        "🤖 Bonus: Awarded to teams treating Trae as a core team member"
    },
    {
      id: 2,
      name: "🥈 Trae Core Engineer",
      x_id: "$100 Cash Prize",
      rank: "Rank #2",
      quote:
        "💡 Criteria: Clear evidence of Trae usage in pitch and codebase\n" +
        "🎁 Perks: Trae Core Engineer Title & Partner-Sponsored Rewards\n" +
        "🚀 Focus: Moving beyond traditional setups to leverage AI-first IDEs\n" +
        "🤖 Bonus: Honors teams using Trae as a powerful engineering co-pilot"
    },
    {
      id: 3,
      name: "🥉 Best Build of AM Hacks",
      x_id: "₹8,000 Cash Prize",
      rank: "Rank #3",
      quote:
        "💡 Criteria: Best overall technical execution and project impact\n" +
        "🎁 Perks: Exclusive Swag Kits & Premium Tool Access\n" +
        "🚀 Focus: Celebrating the most innovative build of the hackathon\n" +
        "📜 Official: Includes Certificates of Recognition for all members"
    },
    {
      id: 4,
      name: "🏅 1st Runner Up",
      x_id: "₹7,000 Cash Prize",
      rank: "Rank #4",
      quote:
        "💡 Criteria: High-quality engineering and standout project execution\n" +
        "🎁 Perks: Exclusive Swag Kits & Partner-Sponsored Goodies\n" +
        "🚀 Focus: Honoring teams that demonstrated exceptional technical skill\n" +
        "⭐ Special: Mentions for standout features and UI/UX"
    },
    {
      id: 5,
      name: "🏅 2nd Runner Up",
      x_id: "₹6,000 Cash Prize",
      rank: "Rank #5",
      quote:
        "💡 Criteria: Strong project presentation and solid technical foundation\n" +
        "🎁 Perks: Swag Kits & Certificates of Recognition\n" +
        "🚀 Focus: Rewarding consistent performance and creative problem solving\n" +
        "⭐ Special: Standout award for project viability and logic"
    },
    {
      id: 6,
      name: "🌱 Best Beginner Team",
      x_id: "₹6,000 Cash Prize",
      rank: "Rank #6",
      quote:
        "💡 Criteria: Best project built by a team of first-time hackers\n" +
        "🎁 Perks: Swag Kits & Special Mention Certificates\n" +
        "🚀 Focus: Encouraging new talent to build and innovate in tech\n" +
        "⭐ Special: Designed specifically to support first-time developers"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === tests.length - 1 ? 0 : prev + 1));
  }, [tests.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? tests.length - 1 : prev - 1));
  };

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold mb-2"
            style={{ color: "oklch(82.8% 0.189 84.429)" }}
          >
            Hackathon Prizes
          </h2>
          <div
            className="w-20 h-1 mx-auto"
            style={{ backgroundColor: "oklch(41.4% 0.112 45.904)" }}
          />
        </div>

        {/* Carousel Container */}
        <div className="relative px-4">
          <div 
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: isMobile 
                ? `translateX(-${currentIndex * 100}%)` 
                : `translateX(-${(currentIndex * (100 / 3)) - (100 / 3)}%)`
            }}
          >
            {tests.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={item.id}
                  className="w-full lg:w-1/3 flex-shrink-0 px-3 transition-all duration-700"
                  style={{ opacity: !isMobile && !isActive ? 0.4 : 1 }}
                >
                  <div
                    className={`rounded-3xl p-8 min-h-[440px] flex flex-col border transition-transform duration-700 ${
                      isActive ? "scale-100 lg:scale-110" : "scale-90 lg:scale-95"
                    }`}
                    style={{ 
                      borderColor: "oklch(60% 0.189 84.429)",
                      backgroundColor: "oklch(25% 0.02 255.508 / 0.3)",
                      boxShadow: isActive ? "0 20px 40px -20px oklch(60% 0.189 84.429 / 0.4)" : "none"
                    }}
                  >
                    {/* Prize Header */}
                    <div className="mb-6">
                      <p className="text-xs font-bold tracking-widest uppercase text-orange-400 mb-1">
                        {item.rank}
                      </p>
                      <h2 className="text-3xl font-black text-white">
                        {item.x_id}
                      </h2>
                    </div>
                    
                    <div className="w-full h-px bg-white/10 mb-6" />

                    {/* Description Body */}
                    <p
                      className="mb-6 flex-grow leading-relaxed whitespace-pre-line text-sm"
                      style={{ color: "oklch(92.9% 0.013 255.508)" }}
                    >
                      {item.quote}
                    </p>

                    <div className="w-12 h-0.5 bg-orange-400 mb-4" />

                    {/* Footer Name */}
                    <div>
                      <h3 className="text-white text-lg font-semibold">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-16">
            <button 
              onClick={prevSlide} 
              className="rounded-full p-3 border border-white/10 hover:bg-white/10 transition-colors text-white"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-3">
              {tests.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "w-10 bg-orange-400"
                      : "w-2 bg-gray-600 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide} 
              className="rounded-full p-3 border border-white/10 hover:bg-white/10 transition-colors text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;