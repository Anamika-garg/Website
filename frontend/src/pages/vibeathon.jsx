import Tagline from "../components/Vibeathon/Tagline";
import AMHacks from "../components/Vibeathon/Hero";
// import Themes from "../components/Vibeathon/Themes";
import FAQs from "../components/Vibeathon/faqs";
import AMSponsi from "../components/Vibeathon/AMSponsi";
import Prizes from "../components/Vibeathon/Testimonials";
import Glimpses from "../components/Vibeathon/Glimpses";
import RoundsTimeline from "../components/Vibeathon/RoundsTimeline";
const VibeathonPage = () => {
  return (
    <div className="relative pt-16 sm:pt-20 pb-12 bg-transparent min-h-screen">
      <AMHacks />
      {/* <Themes/> */}
      <RoundsTimeline />
      <Prizes />
      {/* <Glimpses /> */}
      <FAQs />
    </div>
  );
};

export default VibeathonPage;
