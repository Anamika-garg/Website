[1mdiff --git a/frontend/src/components/AMHacks/Tagline.css b/frontend/src/components/AMHacks/Tagline.css[m
[1mindex 312ec27..4b4c246 100644[m
[1m--- a/frontend/src/components/AMHacks/Tagline.css[m
[1m+++ b/frontend/src/components/AMHacks/Tagline.css[m
[36m@@ -69,7 +69,7 @@[m [mbody {[m
   border-right: none;[m
   backdrop-filter: blur(20px);[m
   border-radius: 0;[m
[31m-  padding: 30px 50px;[m
[32m+[m[32m  padding: 40px 50px;[m
   text-align: center;[m
   position: relative;[m
   z-index: 10;[m
[36m@@ -107,7 +107,7 @@[m [mbody {[m
 [m
 /* Subtitle */[m
 .subtitle {[m
[31m-  margin-top: 10px;[m
[32m+[m[32m  margin-top: 15px;[m
   font-size: 0.85rem;[m
   font-weight: 600;[m
   color: #ffffff;[m
[36m@@ -118,7 +118,7 @@[m [mbody {[m
 [m
 /* Event Date */[m
 .event-date {[m
[31m-  margin-top: 12px;[m
[32m+[m[32m  margin-top: 20px;[m
   display: flex;[m
   align-items: center;[m
   justify-content: center;[m
[36m@@ -147,13 +147,36 @@[m [mbody {[m
   margin: 0;[m
 }[m
 [m
[32m+[m[32m/* Registration Deadline */[m
[32m+[m[32m.registration-deadline {[m
[32m+[m[32m  margin-top: 18px;[m
[32m+[m[32m  font-size: 0.85rem;[m
[32m+[m[32m  font-weight: 800;[m
[32m+[m[32m  text-align: center;[m
[32m+[m[32m  color: #FFB627;[m
[32m+[m[32m  text-shadow: 0 0 12px rgba(255, 182, 39, 0.7);[m
[32m+[m[32m  animation: deadlinePulse 1.5s ease-in-out infinite;[m
[32m+[m[32m  letter-spacing: 0.5px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@keyframes deadlinePulse {[m
[32m+[m[32m  0%, 100% {[m
[32m+[m[32m    transform: scale(1);[m
[32m+[m[32m    opacity: 1;[m
[32m+[m[32m  }[m
[32m+[m[32m  50% {[m
[32m+[m[32m    transform: scale(1.05);[m
[32m+[m[32m    opacity: 0.85;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m
 /* Countdown Container */[m
 .countdown-container {[m
   display: flex;[m
   justify-content: center;[m
   align-items: center;[m
   gap: 8px;[m
[31m-  margin-top: 15px;[m
[32m+[m[32m  margin-top: 25px;[m
   flex-wrap: wrap;[m
 }[m
 [m
[36m@@ -228,7 +251,7 @@[m [mbody {[m
 [m
 /* Button */[m
 .coming-btn {[m
[31m-  margin-top: 20px;[m
[32m+[m[32m  margin-top: 30px;[m
   padding: 10px 30px;[m
   background: linear-gradient(135deg, #E8A90E 0%, #9C7723 100%);[m
   border: 2px solid #E8A90E;[m
[36m@@ -432,7 +455,7 @@[m [mbody {[m
 @media (max-width: 768px) {[m
   .tagline-box {[m
     width: 95%;[m
[31m-    padding: 25px 18px;[m
[32m+[m[32m    padding: 30px 20px;[m
   }[m
   [m
   .title {[m
[36m@@ -441,19 +464,30 @@[m [mbody {[m
   }[m
   [m
   .subtitle {[m
[32m+[m[32m    margin-top: 12px;[m
     font-size: 0.75rem;[m
   }[m
   [m
[32m+[m[32m  .event-date {[m
[32m+[m[32m    margin-top: 15px;[m
[32m+[m[32m  }[m
[32m+[m[41m  [m
   .date-text {[m
     font-size: 0.8rem;[m
   }[m
   [m
[32m+[m[32m  .registration-deadline {[m
[32m+[m[32m    margin-top: 15px;[m
[32m+[m[32m    font-size: 0.75rem;[m
[32m+[m[32m  }[m
[32m+[m[41m  [m
   .date-icon {[m
     font-size: 0.95rem;[m
   }[m
   [m
   .countdown-container {[m
     gap: 5px;[m
[32m+[m[32m    margin-top: 20px;[m
   }[m
   [m
   .countdown-box {[m
[36m@@ -474,6 +508,7 @@[m [mbody {[m
   }[m
   [m
   .coming-btn {[m
[32m+[m[32m    margin-top: 25px;[m
     font-size: 0.75rem;[m
     padding: 8px 22px;[m
   }[m
[1mdiff --git a/frontend/src/components/AMHacks/Tagline.jsx b/frontend/src/components/AMHacks/Tagline.jsx[m
[1mindex 7bfeb34..930ea90 100644[m
[1m--- a/frontend/src/components/AMHacks/Tagline.jsx[m
[1m+++ b/frontend/src/components/AMHacks/Tagline.jsx[m
[36m@@ -10,7 +10,8 @@[m [mconst Tagline = () => {[m
   });[m
 [m
   useEffect(() => {[m
[31m-    const targetDate = new Date('2026-02-15T00:00:00').getTime();[m
[32m+[m[32m    const targetDate = new Date('2026-02-05T23:59:59').getTime();[m
[32m+[m
 [m
     const updateCountdown = () => {[m
       const now = new Date().getTime();[m
[36m@@ -67,9 +68,18 @@[m [mconst Tagline = () => {[m
         {/* Event Date */}[m
         <div className="event-date">[m
           <div className="date-icon"></div>[m
[31m-          <p className="date-text">February 15-17, 2026</p>[m
[32m+[m[32m          <p className="date-text">[m
[32m+[m[32m            🚀🔥 <strong>AM HACKS 2.0</strong> is happening on{' '}[m
[32m+[m[32m            <strong>16th – 18th February 2026</strong> 💻⚡[m
[32m+[m[32m          </p>[m
         </div>[m
 [m
[32m+[m
[32m+[m[32m         {/* Registration Deadline */}[m
[32m+[m[32m        <p className="registration-deadline">[m
[32m+[m[32m          ⏳ <strong>Last Day of Registration:</strong> 5th February 2026 — Register Fast!![m
[32m+[m[32m        </p>[m
[32m+[m
         {/* Countdown Timer */}[m
         <div className="countdown-container">[m
           <div className="countdown-box">[m
