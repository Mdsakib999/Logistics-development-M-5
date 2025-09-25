import Experiance from "../components/Home/Experiance";
import Feedback from "../components/Home/Feedback";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/HowItWorks";
import Request from "../components/Home/Request";
import Solution from "../components/Home/Solution";
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
      <Request />
    </div>
  );
}
