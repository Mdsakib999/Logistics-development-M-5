import Empower from "../components/about/Empower";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
export default function About() {
  return (
    <div>
      {/* banner section */}
      <div className="py-12 w-4/5 md:w-3/5 lg:w-3/5 mx-auto mb-12">
        <Heading className="my-4 !text-center" lineHeight="tight">
          Your Trusted Logistics
 Partner
        </Heading>
        <Paragraph className="!text-center">
Elementum augue ut sagittis vel nunc. Posuere id velit integer proin aliquam facilisi quis et cras. Leo nulla integer et aliquet massa nunc. Ornare id sit ac varius enim ut nisl.Elementum augue ut sagittis vel nunc. Posuere id velit integer proin aliquam facilisi quis et cras. Leo nulla integer et aliquet massa nunc. Ornare id sit ac varius enim ut nisl.
        </Paragraph>
      </div>
      <Empower />
    </div>
  );
}
