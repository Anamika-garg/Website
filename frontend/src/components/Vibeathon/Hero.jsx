import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AMVibeathonEffect } from "@/components/ui/apple-hello-effect";
import { fetchRegistrationCount } from "@/lib/teams";

const Vibeathon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [registrationCount, setRegistrationCount] = useState(0);


  useEffect(() => {
    const registrationDeadline = new Date('2026-09-16T23:59:59+05:30').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const diff = registrationDeadline - now;

      if (diff > 0) {
        return {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const updateCountdown = () => {
      setTimeLeft(calculateTimeLeft());
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getRegistrationCount = async () => {
      try {
        const count = await fetchRegistrationCount();
        setRegistrationCount(count);
      } catch (error) {
        console.error("Failed to fetch registration count:", error);
      }
    };

    getRegistrationCount();
  }, []);

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative text-white min-h-[85vh] flex items-center justify-center bg-transparent overflow-hidden w-full">
        <div className="relative z-[2] w-full flex items-center justify-center">
          <div className="container mx-auto px-4 py-8 sm:py-12 relative">
            <motion.div
              className="text-center max-w-5xl mx-auto"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {/* TITLE */}
              <motion.div variants={childVariants} className="flex flex-col items-center justify-center">
                <h1 className="font-sans text-5xl md:text-6xl font-black tracking-tight mb-4 mt-8 text-white leading-tight">
                  Ideas Made by{" "}
                  <span className="font-serif italic font-normal text-amber-400">
                    Her
                  </span>
                  .<br />
                  Impact Made by{" "}
                  <span className="font-serif italic font-normal text-amber-400">
                    Us
                  </span>
                  .
                </h1>

                {/* Cursive Animated "SheVibes" Logo */}
                <div className="text-amber-400 my-4 flex items-center justify-center min-h-[140px] w-full max-w-[460px]">
                  <AMVibeathonEffect speed={0.9} className="w-full text-amber-400" />
                </div>

                <div className="h-0.5 w-16 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full mb-8" />
              </motion.div>

              {/* DESCRIPTION */}
              <motion.p
                className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
                variants={childVariants}
              >
                A women-focused SheVibes vibeathon where fresh ideas meet
                technology, creativity, and a community of women builders.
              </motion.p>

{/* COUNTDOWN TIMER */}

<motion.div
  variants={childVariants}
  className="flex justify-center items-center gap-3 my-8"
>
  <div className="flex flex-col items-center bg-white/[0.04] border border-white/10 px-4 py-2.5 rounded-2xl min-w-[65px] backdrop-blur-md">
    <span className="text-2xl font-black text-white">
      {String(timeLeft.days).padStart(2, "0")}
    </span>
    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-1">
      Days
    </span>
  </div>

  <span className="text-lg font-bold text-slate-500">:</span>

  <div className="flex flex-col items-center bg-white/[0.04] border border-white/10 px-4 py-2.5 rounded-2xl min-w-[65px] backdrop-blur-md">
    <span className="text-2xl font-black text-white">
      {String(timeLeft.hours).padStart(2, "0")}
    </span>
    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-1">
      Hours
    </span>
  </div>

  <span className="text-lg font-bold text-slate-500">:</span>

  <div className="flex flex-col items-center bg-white/[0.04] border border-white/10 px-4 py-2.5 rounded-2xl min-w-[65px] backdrop-blur-md">
    <span className="text-2xl font-black text-white">
      {String(timeLeft.minutes).padStart(2, "0")}
    </span>
    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-1">
      Mins
    </span>
  </div>

  <span className="text-lg font-bold text-slate-500">:</span>

  <div className="flex flex-col items-center bg-white/[0.04] border border-white/10 px-4 py-2.5 rounded-2xl min-w-[65px] backdrop-blur-md">
    <span className="text-2xl font-black text-white">
      {String(timeLeft.seconds).padStart(2, "0")}
    </span>
    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mt-1">
      Secs
    </span>
  </div>
</motion.div>
              {/* REGISTRATION */}
              <motion.div
                className="flex flex-col items-center gap-4 mb-8"
                variants={childVariants}
              >
                {/* REGISTRATION COUNT */}
                <div className="flex flex-col items-center mb-1">
                  <span className="text-3xl font-black text-white">
                    {registrationCount}+
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
                    Women already registered
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-amber-400 font-medium">
                  <span></span>
                  <span>Team Size: 2–4 Members</span>
                </div>

                <div className="comic-brutal-button-container">
                  <a href="/register">
                    <button className="comic-brutal-button">
                      <div className="button-inner">
                        <span className="button-text">Register Now</span>
                        <div className="halftone-overlay"></div>
                        <div className="ink-splatter"></div>
                      </div>
                      <div className="button-shadow"></div>
                      <div className="button-frame"></div>
                    </button>
                  </a>
                </div>

                <motion.a
                  href="#learn-more"
                  className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors mt-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More &darr;
                </motion.a>
              </motion.div>

              {/* PS */}
              <motion.p
                className="text-xs font-mono tracking-widest uppercase text-slate-500"
                variants={childVariants}
              >
                PS: To be announced
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vibeathon;