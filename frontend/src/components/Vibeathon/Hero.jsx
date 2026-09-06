import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AMVibeathonEffect } from "@/components/ui/apple-hello-effect";
import { fetchRegistrationCount } from "@/lib/teams";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [registrationCount, setRegistrationCount] = useState(0);

  useEffect(() => {
    const registrationDeadline = new Date(
      "2026-09-16T23:59:59+05:30"
    ).getTime();

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
      transition: { staggerChildren: 0.15 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white/[0.06] border border-white/15 px-4 py-3 rounded-xl min-w-[64px] backdrop-blur-sm transition-all hover:border-amber-400/40 hover:bg-white/[0.10] shadow-lg shadow-amber-500/5">
      <span className="text-3xl sm:text-4xl font-black text-white tabular-nums tracking-tight">
        {value}
      </span>
      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-300 mt-1">
        {label}
      </span>
    </div>
  );

  return (
    <>
      {/* HERO SECTION */}
      <div className="relative text-white min-h-[90vh] flex items-center justify-center bg-transparent overflow-hidden w-full px-4">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-[2] w-full max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
          >
            {/* ─── LEFT COLUMN: Branding ─── */}
            <motion.div
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5"
              variants={childVariants}
            >
              {/* Badge */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium text-amber-400 tracking-wider uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Vibeathon 2026
              </motion.div>

              {/* Title - now smaller */}
              <motion.h1
                variants={fadeInUp}
                className="font-sans text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-black tracking-tight leading-[1.1] text-white"
              >
                Ideas Made by{" "}
                <span className="font-serif italic font-normal text-amber-400">
                  Her
                </span>
                .
                <br />
                Impact Made by{" "}
                <span className="font-serif italic font-normal text-amber-400">
                  Us
                </span>
                .
              </motion.h1>

              {/* SheVibes — now larger */}
              <div className="w-full flex items-center justify-center relative">
                <motion.div
                  variants={fadeInUp}
                  className="text-amber-400 w-full max-w-[600px] items-center scale-95 origin-left"
                >
                  <span className="font-serif italic font-bold text-6xl md:text-7xl lg:text-8xl tracking-wide">
                    SheVibes
                  </span>
                </motion.div>
              </div>

              <motion.div
                variants={fadeInUp}
                className="h-0.5 w-20 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
              />

              {/* Description - now with serif font and slightly larger */}
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed font-serif font-light italic"
              >
                A women-focused SheVibes vibeathon where fresh ideas meet
                technology, creativity, and a community of women builders.
              </motion.p>

              {/* Learn More (desktop) */}
              <motion.a
                variants={fadeInUp}
                href="#ps"
                className="text-xs uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors mt-2 inline-flex items-center gap-2"
                whileHover={{ x: 4 }}
              >
                Learn More
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
            </motion.div>

            {/* ─── RIGHT COLUMN: Registration Card ─── */}
            <motion.div
              variants={childVariants}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                variants={fadeInUp}
                className="w-full max-w-md bg-white/[0.04] backdrop-blur-xl border border-white/15 rounded-3xl p-7 sm:p-9 shadow-2xl shadow-amber-500/10 hover:border-white/25 transition-all duration-500 relative overflow-hidden"
              >
                {/* Decorative glow - more vibrant */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-7">
                  {/* Card header */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-slate-300">
                      Registration
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400/80 border border-amber-400/30 px-3 py-1 rounded-full bg-amber-400/5">
                      Open
                    </span>
                  </div>

                  {/* Countdown - now with larger units */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3 bg-white/[0.04] rounded-2xl px-5 py-4 border border-white/10">
                      <TimeUnit
                        value={String(timeLeft.days).padStart(2, "0")}
                        label="Days"
                      />
                      <span className="text-lg font-bold text-slate-400 select-none">
                        :
                      </span>
                      <TimeUnit
                        value={String(timeLeft.hours).padStart(2, "0")}
                        label="Hours"
                      />
                      <span className="text-lg font-bold text-slate-400 select-none">
                        :
                      </span>
                      <TimeUnit
                        value={String(timeLeft.minutes).padStart(2, "0")}
                        label="Mins"
                      />
                      <span className="text-lg font-bold text-slate-400 select-none">
                        :
                      </span>
                      <TimeUnit
                        value={String(timeLeft.seconds).padStart(2, "0")}
                        label="Secs"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10" />

                  {/* Registration stats - larger fonts */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/[0.04] rounded-2xl px-5 py-4 border border-white/10 text-center">
                      <div className="text-3xl font-black text-white">
                        {registrationCount}+
                      </div>
                      <div className="text-xs uppercase tracking-[0.15em] text-slate-300 font-medium mt-1">
                        Women Registered
                      </div>
                    </div>
                    <div className="bg-white/[0.04] rounded-2xl px-5 py-4 border border-white/10 text-center">
                      <div className="text-3xl font-black text-white">
                        2–4
                      </div>
                      <div className="text-xs uppercase tracking-[0.15em] text-slate-300 font-medium mt-1">
                        Team Size
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-5 pt-1">
                    <a href="/register" className="block w-full">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-bold py-4 rounded-2xl text-base tracking-wide shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Register Now
                          <svg
                            className="w-5 h-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </motion.button>
                    </a>

                    {/* ✦ Direct entry to AM web3 community - now more highlighted */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-400/30 rounded-xl px-5 py-3 shadow-lg shadow-amber-500/10"
                    >
                      <span className="text-amber-400 text-base">✦</span>
                      <span className="text-sm font-semibold text-amber-200 tracking-wide">
                        Direct entry to{" "}
                        <span className="font-extrabold text-amber-400 underline decoration-amber-400/30 underline-offset-2">
                          AM Web3 community
                        </span>
                      </span>
                    </motion.div>
                  </div>

                  {/* PS */}
                  <p className="text-[11px] font-mono tracking-[0.25em] uppercase text-slate-500/60 text-center pt-1">
                    PS: To be announced
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;