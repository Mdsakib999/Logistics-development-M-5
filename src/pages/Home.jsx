import Blogs from "../components/Home/Blogs";
import Experiance from "../components/Home/Experiance";
import Feedback from "../components/Home/Feedback";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import OurExperiance from "../components/Home/OurExperiance";
import Price from "../components/Home/Price";
import Request from "../components/Home/Request";
import Solution from "../components/Home/Solution";
import TopBanner from "../components/Home/TopBanner";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";

export default function Home() {
  return (
    <div className="">
      <TopBanner />
      <Solution />
      <Experiance />
      <HowItWorks />
      <OurExperiance />
      <Hero />
      {/* <Price /> */}
      {/* <Blogs /> */}
      <Feedback />
      <Request />
    </div>
  );
}
