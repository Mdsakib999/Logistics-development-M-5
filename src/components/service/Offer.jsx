import { Phone } from "lucide-react";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import OfferCard from "../ui/OfferCard";
import Paragraph from "../ui/Paragraph";
export default function Offer() {
  return (
    <div className="py-16 bg-[#f9faf9]">
      <Container>
        {/* content section */}
        <div className="flex flex-col sm:flex-row justify-between w-full">
          <Heading className="pt-0 sm:pt-8">Unsere Dienstleistungen</Heading>
          <div className="w-full sm:w-2/5 space-y-4 ">
            <Paragraph>
              Effizienter und zuverlässiger Versand mit FastGo

            </Paragraph>
            <Button to="/contact">
              <Phone /> <span className="ml-2">Kontaktieren uns</span>
            </Button>
          </div>
        </div>

        {/* Card section */}
        <div className=" py-12">
          <OfferCard  />
        </div>
      </Container>
    </div>
  );
}
