import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const handleCardMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
};

const Prizes = () => {
  const tests = [
    {
      id: 1,
      name: "🌐 Top 6 → Web3 Community",
      x_id: "Top 6",
      rank: "Community Opportunity",
      quote:
        "The Top 6 teams get an opportunity to enter our Web3 community.\n\nContinue learning, building, and collaborating beyond SheVibes.",
    },

    {
      id: 2,
      name: "🎁 Goodies & Recognition",
      x_id: "Goodies + Recognition",
      rank: "For Your Ideas",
      quote:
        "Walk away with exciting goodies and recognition for your ideas and efforts.",
    },

    {
      id: 3,
      name: "🚀 Keep Building",
      x_id: "Keep Building",
      rank: "Beyond SheVibes",
      quote:
        "Connect with fellow builders, explore Web3, and be part of a community that keeps your ideas moving.",
    },
  ];

  /* Clone items for infinite loop */
  const extendedTests = [
    tests[tests.length - 1],
    ...tests,
    tests[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleNext = useCallback(() => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  /* Infinite teleport */
  useEffect(() => {
    if (currentIndex === extendedTests.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 700);
    }

    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(tests.length);
      }, 700);
    }
  }, [currentIndex, extendedTests.length, tests.length]);

  /* Turn transitions back on */
  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  /* Responsive */
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  /* Auto-play */
  useEffect(() => {
    const interval = setInterval(handleNext, 4500);

    return () => clearInterval(interval);
  }, [handleNext]);

  const getTranslateX = () => {
    if (isMobile) {
      return -(currentIndex * 100);
    }

    return -(currentIndex * (100 / 3)) + 100 / 3;
  };

  return (
    <div className="flex items-center justify-center px-4 py-20 overflow-hidden bg-transparent w-full">
      <div className="max-w-7xl w-full">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-sans text-3xl md:text-5xl font-black text-center mb-4 text-white tracking-tight">
            SheVibes <span className="font-serif italic font-normal text-amber-400">Benefits</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            className="flex"
            style={{
              transform: `translateX(${getTranslateX()}%)`,
              transition: isTransitioning
                ? "transform 700ms cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
            }}
          >
            {extendedTests.map((item, index) => {
              const isActive = index === currentIndex;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="w-full lg:w-1/3 flex-shrink-0 px-3"
                >
                  <div
                    onMouseMove={handleCardMouseMove}
                    className={`rounded-3xl p-8 min-h-[440px] flex flex-col border border-white/10 transition-all duration-700 bg-white/[0.08] backdrop-blur-md spotlight-card ${
                      isActive
                        ? "scale-100 opacity-100 border-amber-400/30"
                        : "scale-90 opacity-30 blur-[1px]"
                    }`}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-amber-400 mb-2">
                        {item.rank}
                      </p>

                      <h2 className="text-2xl font-extrabold text-white">
                        {item.x_id}
                      </h2>
                    </div>

                    <div className="w-full h-px bg-white/10 mb-6" />

                    {/* Description */}
                    <p className="mb-6 flex-grow leading-relaxed whitespace-pre-line text-sm text-slate-300 font-light">
                      {item.quote}
                    </p>

                    <div className="w-12 h-px bg-amber-400 mb-4" />

                    {/* Footer */}
                    <div>
                      <h3 className="text-white text-base font-semibold">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-16">
            <button
              onClick={handlePrev}
              className="rounded-full p-3 border border-white/10 hover:bg-white/10 transition-colors text-white cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-3">
              {tests.map((_, index) => {
                const realIndex =
                  (currentIndex - 1 + tests.length) % tests.length;

                return (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index + 1)}
                    className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                      index === realIndex
                        ? "w-8 bg-amber-400"
                        : "w-1.5 bg-gray-600 hover:bg-gray-400"
                    }`}
                  />
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="rounded-full p-3 border border-white/10 hover:bg-white/10 transition-colors text-white cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;