// import Tagline from "../components/AMHacks/Tagline";

// const AMHacksPage = () => {
//   return (
//     <div className="pt-24">
//       {/* <Tagline /> */}
//     </div>
//   );
// };

// export default AMHacksPage;

import Tagline from "../components/AMHacks/Tagline";
import AMHacks from "../components/AMHacks/Hero";
import Sponsor from "../components/AMHacks/Sponsor.jsx";
import FAQs from "../components/AMHacks/Faqs";
import AMSponsi from "../components/AMHacks/AMSponsi";
import Testimonials from "../components/AMHacks/Testimonials";

const AMHacksPage = () => {
  return (
    <div className="top-[-90px] relative pt-24">
      <AMHacks/>
      <AMSponsi/>
      <Sponsor/>
      <Tagline/>
      <Testimonials/>
      <FAQs/>
    </div>
  );
};

export default AMHacksPage;