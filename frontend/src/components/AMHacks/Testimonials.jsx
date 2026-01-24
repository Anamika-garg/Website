import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const tests = [
    {
      id: 1,
      name: "🥇 Trae Prime Engineers",
      x_id: "Rank #1 · $150 Cash Prize",
      quote:
        "🏆 Trae Prime Engineer is awarded to the winning team that showcases outstanding engineering excellence powered by Trae.\n\n" +
        "💰 The best Trae-powered project will win the Trae Prime Engineer title and a $150 cash prize.\n\n" +
        "💡 Eligibility: Your project must demonstrate meaningful usage of Trae as your AI IDE throughout development.\n\n" +
        "🎤 Final Pitch (first 10–15 seconds) — clearly explain how Trae helped you:\n" +
        "⚡ Accelerate development\n" +
        "🧠 Improve code quality\n" +
        "🛠️ Debug efficiently\n" +
        "🔁 Iterate faster than traditional IDEs (e.g., VS Code)\n\n" +
        "🤖 This track celebrates teams who treated Trae as a 10× AI engineer."
    },
    {
      id: 2,
      name: "🥈 Trae Core Engineer",
      x_id: "Rank #2 · $100 Cash Prize",
      quote:
        "💰 The runner-up Trae-powered project will earn the Trae Core Engineer title and a $100 cash prize.\n\n" +
        "💡 Eligibility: Teams must show clear evidence of Trae usage, along with a brief explanation in the opening pitch.\n\n" +
        "🚀 Participants are encouraged to move beyond traditional setups like VS Code and leverage Trae’s AI-first IDE to:\n" +
        "⚡ Code faster\n" +
        "🧠 Think smarter\n" +
        "🔁 Iterate better\n\n" +
        "🤖 This award honors teams that used Trae as a powerful engineering co-pilot."
    },
    {
      id: 3,
      name: "🥉 Best Build of AM Hacks",
      x_id: "Rank #3 · ₹8,000 Cash Prize",
      quote:
        "💰 Cash Prize: ₹8,000\n" +
        "🎁 Exclusive Swag Kits\n" +
        "🤝 Partner-Sponsored Rewards\n" +
        "🚀 Access to Premium Tools & Platforms\n" +
        "📜 Official Certificates of Recognition"
    },
    {
      id: 4,
      name: "🏅 1st Runner Up",
      x_id: "Rank #4 · ₹7,000 Cash Prize",
      quote:
        "🤑 Cash Prize: ₹7,000\n" +
        "🎁 Exclusive Swag Kits & Partner-Sponsored Goodies\n" +
        "🚀 Access to Premium Tools & Platforms\n" +
        "📜 Certificates of Recognition\n" +
        "⭐ Special Mentions for standout teams"
    },
    {
      id: 5,
      name: "🏅 2nd Runner Up",
      x_id: "Rank #5 · ₹6,000 Cash Prize",
      quote:
        "🤑 Cash Prize: ₹6,000\n" +
        "🎁 Exclusive Swag Kits & Partner-Sponsored Goodies\n" +
        "📜 Certificates of Recognition\n" +
        "⭐ Special Mentions for standout teams"
    },
    {
      id: 6,
      name: "🌱 Best Beginner Team",
      x_id: "Rank #6 · ₹6,000 Cash Prize",
      quote:
        "🤑 Cash Prize: ₹6,000\n" +
        "🎁 Exclusive Swag Kits & Partner-Sponsored Goodies\n" +
        "📜 Certificates of Recognition\n" +
        "⭐ Special Mentions for standout teams"
    }
  ];

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3800);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === tests.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? tests.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    const prevIndex = currentIndex === 0 ? tests.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === tests.length - 1 ? 0 : currentIndex + 1;

    return [
      { ...tests[prevIndex], position: "left" },
      { ...tests[currentIndex], position: "center" },
      { ...tests[nextIndex], position: "right" }
    ];
  };

  const visibleTestimonials = isMobile
    ? [{ ...tests[currentIndex], position: "center" }]
    : getVisibleTestimonials();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full">
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

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {visibleTestimonials.map((item) => (
              <div
                key={item.id}
                className={`transition-all duration-500 ${
                  item.position === "center"
                    ? "lg:scale-110 z-20"
                    : "lg:scale-90 lg:opacity-60 z-10"
                }`}
              >
                <div
                  className={`rounded-3xl p-8 min-h-[420px] flex flex-col bg--800 border`}
                  style={{ borderColor: "oklch(60% 0.189 84.429)" }}
                >
                  <p
                    className="text-white mb-6 flex-grow leading-relaxed whitespace-pre-line"
                    style={{ color: "oklch(92.9% 0.013 255.508)" }}
                  >
                    {item.quote}
                  </p>

                  <div className="w-12 h-0.5 bg-orange-400 mb-4" />

                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {item.x_id}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button onClick={prevSlide} className="rounded-full p-3">
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {tests.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-orange-400"
                      : "w-2 bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <button onClick={nextSlide} className="rounded-full p-3">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
