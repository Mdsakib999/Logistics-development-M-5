import { CompanyStory } from "../components/about/CompanyStory";
import Empower from "../components/about/Empower";
import Faq from "../components/about/Faq";
import TopAbout from "../components/about/TopAbout";
export default function About() {
  return (
    <div>
      <TopAbout />
      <CompanyStory />
      <Empower />
      {/* <Experiance /> */}
      <Faq />
    </div>
  );
}
