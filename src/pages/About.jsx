import Empower from "../components/about/Empower";
import Experiance from "../components/Home/Experiance";
import Faq from "../components/sections/Faq";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
export default function About() {
  return (
    <div>
      {/* banner section */}
      <div className="py-12 w-4/5 md:w-3/5 lg:w-3/5 mx-auto mb-12">
        <Heading className="my-4 mx-auto" align="center" lineHeight="tight">
          Your Trusted Logistics
 Partner
        </Heading>
        <Paragraph align="center">
Elementum augue ut sagittis vel nunc. Posuere id velit integer proin aliquam facilisi quis et cras. Leo nulla integer et aliquet massa nunc. Ornare id sit ac varius enim ut nisl.Elementum augue ut sagittis vel nunc. Posuere id velit integer proin aliquam facilisi quis et cras. Leo nulla integer et aliquet massa nunc. Ornare id sit ac varius enim ut nisl.
        </Paragraph>
      </div>
      <Empower />
      {/* <Experiance /> */}
      <Faq />
    </div>
  );
}
