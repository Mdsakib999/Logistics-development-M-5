import Experiance from "../components/Home/Experiance";
import Feedback from "../components/Home/Feedback";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Solution from "../components/sections/Solution";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";

export default function Home() {
  return (
    <div>
      <Hero />
      <Solution />
      <Experiance />
      <HowItWorks />
      <Feedback />
    </div>
  );
}
