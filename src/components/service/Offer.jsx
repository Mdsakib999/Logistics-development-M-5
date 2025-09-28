import { Phone } from "lucide-react";
import deliveryImage from "../../assets/12-Delivery.png";
import shippingImage from "../../assets/25-Shipping.png";
import weightImage from "../../assets/33-Weight.png";
import boxImage from "../../assets/35-Box.png";
import worldImage from "../../assets/36-World wide shipping.png";
import shippingImage2 from "../../assets/51-Shipping.png";
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
          <Heading className="pt-0 sm:pt-8">Our Offerings</Heading>
          <div className="w-1/2 sm:w-2/5 space-y-4 ">
            <Paragraph>
              Elementum augue ut sagittis vel nunc. Posuere id velit integer
              proin aliquam facilisi quis et cras.
            </Paragraph>
            <Button>
              <Phone /> <span className="ml-2">Contact Us</span>
            </Button>
          </div>
        </div>

        {/* Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          <OfferCard imageSrc={deliveryImage} />
          <OfferCard imageSrc={shippingImage} />
          <OfferCard imageSrc={weightImage} />
          <OfferCard imageSrc={boxImage} />
          <OfferCard imageSrc={worldImage} />
          <OfferCard imageSrc={shippingImage2} />
        </div>
      </Container>
    </div>
  );
}
