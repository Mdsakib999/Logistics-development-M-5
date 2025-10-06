import aboutUs from "../assets/about-us.jpg";
import { CompanyStory } from "../components/about/CompanyStory";
import Empower from "../components/about/Empower";
import Faq from "../components/about/Faq";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
export default function About() {
  return (
    <div>
      {/* banner section */}
      <div
        id="about-section"
        style={{
          color: "white",
          backgroundImage: `url(${aboutUs})`,
          backgroundSize: "cover",
          border: "1px solid transparent",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "50vh",
        }}
        className="p-16 z-0 relative w-4/5 md:w-3/5 lg:w-3/5 mx-auto mb-12"
      >
        <Heading
          className="my-4 text-white mx-auto relative z-50"
          align="center"
          lineHeight="tight"
        >
          Your Trusted Logistics Partner
        </Heading>
        <Paragraph className="text-white relative z-50" align="center">
          Elementum augue ut sagittis vel nunc. Posuere id velit integer proin
          aliquam facilisi quis et cras. Leo nulla integer et aliquet massa
          nunc. Ornare id sit ac varius enim ut nisl.Elementum augue ut sagittis
          vel nunc. Posuere id velit integer proin aliquam facilisi quis et
          cras. Leo nulla integer et aliquet massa nunc. Ornare id sit ac varius
          enim ut nisl.
        </Paragraph>
        {/* CTA Button */}
      </div>
      <CompanyStory />
      <Empower />
      {/* <Experiance /> */}
      <Faq />
    </div>
  );
}
