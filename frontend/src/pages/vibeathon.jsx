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
  return (
    <div className="relative pt-16 sm:pt-20 pb-12 bg-transparent min-h-screen">
      {/* <AMHacks /> */}
      <Hero/>
      {/* <Tracks/> */}
      <RoundsTimeline />
      <Prizes />
      {/* <Glimpses /> */}
      <FAQs />
    </div>
  );
};

export default VibeathonPage;
