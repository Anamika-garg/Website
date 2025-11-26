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
import Sponsor from "../components/AMHacks/sponsor";
import FAQs from "../components/AMHacks/faqs";

const AMHacksPage = () => {
  return (
    <div className="top-[-90px] relative pt-24">
      <AMHacks/>
      <Sponsor/>
      <Tagline/>
      <FAQs/>
    </div>
  );
};

export default AMHacksPage;