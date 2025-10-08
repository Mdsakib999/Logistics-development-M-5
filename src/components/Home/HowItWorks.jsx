import {
  Calendar,
  FileText,
  Home,
  MessageSquare,
  Package,
  Truck,
} from "lucide-react";
import worksImage from "../../assets/works.png";
import Overlay from "../../utils/Overlay";
import Container from "../layout/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import WorkCard from "../ui/WorkCard";
export default function HowItWorks() {
  return (
    <div className="pt-8 md:py-12 bg-gray-100">
      <Container className="py-4 md:py-12 lg:py-16">
        {/* content section */}
        <div className="flex flex-col gap-4 md:gap-2 lg:gap-0 md:flex-row">
          {/* image content */}
          <div className="flex justify-center mb-8 md:mb-4 md:justify-start items-center w-full mx-auto md:w-1/2">
            <div className="relative group">
              <img
                src={worksImage}
                className="rounded-lg"
                alt="product-shifting image"
              />
              <Overlay heading="Safe Delivery" paragraph="next to your door" />
            </div>
          </div>
          {/* text content */}
          <div className="flex justify-center flex-col px-4 lg:px-1 pb-12 gap-4 w-full md:w-1/2">
            <h6 className="uppercase font-heading tex-sm font-medium">
              How It Works
            </h6>
            <Heading lineHeight="tight">
              Simplify Your Shipping Experience
            </Heading>
            <Paragraph>
              At FastGo, we believe in providing our clients with personalized
              and efficient logistics solutions that meet their unique needs.
              With years of experience and a team of experts, we are dedicated
              to empowering your business with seamless shipping experiences.
            </Paragraph>
          </div>
        </div>
        <hr className="border-1 border-[#5C6C7B] border-dashed my-4 md:my-10" />
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-8 my-12">
          <WorkCard
            src={<Package size={40} color="white" />}
            heading="Request a quote"
            step="1"
          />
          <WorkCard
            src={<FileText size={40} color="white" />}
            heading="Provide details"
            step="2"
          />
          <WorkCard
            src={<Calendar size={40} color="white" />}
            heading="Timely pick-up"
            step="3"
          />
          <WorkCard
            src={<Truck size={40} color="white" />}
            heading="Track shipment"
            step="4"
          />
          <WorkCard
            src={<Home size={40} color="white" />}
            heading="Receive Package"
            step="5"
          />
          <WorkCard
            src={<MessageSquare size={40} color="white" />}
            heading="Share feedback"
            step="6"
          />
        </div>
      </Container>
    </div>
  );
}
