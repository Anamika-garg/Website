import Tagline from "../components/AMHacks/Tagline";
import AMHacks from "../components/AMHacks/Hero";
import Sponsor from "../components/AMHacks/sponsor";
import FAQs from "../components/AMHacks/faqs";
import AMSponsi from "../components/AMHacks/AMSponsi";
import Testimonials from "../components/AMHacks/Testimonials";
import Glimpses from "../components/AMHacks/Glimpses";
import RoundsTimeline from "../components/AMHacks/RoundsTimeline";

const AMHacksPage = () => {
  return (
    <div className="top-[-90px] relative pt-24">
      <AMHacks />
      <Sponsor />
      <Tagline />
      <RoundsTimeline />
      <Testimonials />
      <AMSponsi />
      <Glimpses />
      <FAQs />
    </div>
  );
};

export default AMHacksPage;
