import Faq from "../components/sections/Faq";
import HowItWorks from "../components/sections/HowItWorks";
import Solution from "../components/sections/Solution";
import Banner from "../components/service/Banner";
import Offer from "../components/service/Offer";

export default function Service() {
  return (
    <div>
      <Banner />
      <Solution />
      <Offer />
      <HowItWorks />
      <Faq />
    </div>
  );
}
