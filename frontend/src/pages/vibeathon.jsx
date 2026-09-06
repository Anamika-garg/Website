import { useState, useEffect } from "react";
import Tagline from "../components/Vibeathon/Tagline";
import AMHacks from "../components/Vibeathon/HeroPrev";
import FAQs from "../components/Vibeathon/faqs";
import AMSponsi from "../components/Vibeathon/AMSponsi";
import Prizes from "../components/Vibeathon/Testimonials";
import Glimpses from "../components/Vibeathon/Glimpses";
import Hero from "../components/Vibeathon/Hero";
import RoundsTimeline from "../components/Vibeathon/RoundsTimeline";
import Tracks from "../components/Vibeathon/Themes";
const VibeathonPage = () => {
  const [showTracks, setShowTracks] = useState(false);

  useEffect(() => {
    // Target date: 7 September 2026, 00:00:00 (local time)
    const targetDate = new Date("2026-09-07T00:00:00");
    const now = new Date();

    if (now >= targetDate) {
      setShowTracks(true);
    }
  }, []);
  return (
    <div className="relative pt-16 sm:pt-20 pb-12 bg-transparent min-h-screen">
      {/* <AMHacks /> */}
      <Hero/>
      {showTracks && <Tracks />}
      {/* <Tracks/> */}
      <RoundsTimeline />
      <Prizes />
      {/* <Glimpses /> */}
      <FAQs />
    </div>
  );
};

export default VibeathonPage;
