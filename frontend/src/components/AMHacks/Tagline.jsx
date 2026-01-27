import React, { useState, useEffect } from 'react';
import './Tagline.css';

const Tagline = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-06T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tagline-section">
      <div className="gradient-bg"></div>
      <div className="particles"></div>
      
      <div className="pulse-ring"></div>
      <div className="pulse-ring"></div>
      <div className="pulse-ring"></div>
      
      <div className="tagline-box">
        <div className="deco-line top"></div>
        <div className="deco-line bottom"></div>
        
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
        
        <div className="corner-accent tl"></div>
        <div className="corner-accent tr"></div>
        <div className="corner-accent bl"></div>
        <div className="corner-accent br"></div>
        
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        
        <h1 className="title">AM Hacks 2.0 <span>2026</span></h1>
        <p className="subtitle">Where Creativity Meets Technology, and Every Idea Becomes a Game Changing Innovation</p>
        
        {/* Event Date */}
        <div className="event-date">
          <div className="date-icon"></div>
          <p className="date-text">February 6-8, 2026</p>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-container">
          <div className="countdown-box">
            <div className="countdown-value">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-box">
            <div className="countdown-value">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-box">
            <div className="countdown-value">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-box">
            <div className="countdown-value">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </div>
        </div>

        <button className="coming-btn">Coming Soon!</button>
      </div>
    </div>
  );
};

export default Tagline;