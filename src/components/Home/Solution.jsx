import truckBackside from "../../assets/Solution.png";
import Overlay from "../../utils/Overlay";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Solution() {
  return (
    <div className="w-full pt-16 sm:pt-30 pb-16 sm:pb-24 bg-[#f9faf9]">
      <Container className="w-full">
        <Heading className="pb-4 sm:pb-16 mx-auto"
          fontWeight="bold"
          lineHeight="tight"
          align="center"
        >
          Wir bieten die besten  <br /> Logistiklösungen der Welt.
        </Heading>
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row border-gray-500">
          {/* image aside */}
<div className="w-full px-4 md:px-8 md:w-[573px]">
  <div className="relative group mt-0 md:mt-8 lg:mt-0">
    <img
      className="rounded-xl sm:rounded-l-xl w-full h-96 md:h-auto object-cover"
      src={truckBackside}
      alt="truck-backside"
    />

    {/* Overlay only on image */}
    <Overlay heading="Truck Service" paragraph="Fast & Reliable Transport" />
  </div>
</div>

          {/* content */}
          <div className="w-full md:[w-500px] lg:w-[529px] flex flex-col justify-center gap-2 sm:gap-8 md:gap-4 lg:gap-16">
            <Heading fontWeight="lighter" className="px-8">Seefracht</Heading>
            <div className="bg-secondary px-8 py-4 lg:py-12 flex flex-col gap-2">
              <Heading fontWeight="lighter">Straßentransport</Heading>
              <Paragraph className="">
                Verabschieden Sie sich von komplizierter Logistik und begrüßen Sie einen reibungslosen, stressfreien Versand. Von der Abholung bis zur Lieferung machen wir jeden Schritt einfach und zuverlässig, damit Sie sich auf das Wachstum Ihres Unternehmens konzentrieren können.
              </Paragraph>
              <Button to="/contact" type="different" className="hover:bg-black">Loslegen</Button>
            </div>
            <Heading fontWeight="lighter" className="px-8">Luftfracht</Heading>
          </div>
        </div>
      </Container>
    </div>
  );
}
