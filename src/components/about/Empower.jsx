import empowerImg from "../../assets/empower.jpg";
import Overlay from "../../utils/Overlay";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Empower() {
  return (
    <div className="py-16">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between  gap-4 sm:gap-24">
          {/*content section */}
          <div className="flex flex-col w-full sm:w-1/2 pb-8 pl-2">
            <div className="space-y-4">
              <Heading lineHeight="tight">
                Empowering Your Business with Tailored Logistics Solutions
              </Heading>
              <Paragraph className="lg:mb-16">
                At FastGo, we believe in providing our clients with personalized
                and efficient logistics solutions that meet their unique needs.
                With years of experience and a team of experts, we are dedicated
                to empowering your business with seamless shipping experiences.
              </Paragraph>
              <Button to="/service">Learn More</Button>
            </div>
          </div>
          {/* image section */}
          <div className="w-full sm:w-1/2">
          <div className="relative group h-full">
            <img
              className="w-full mr-2 h-full lg:h-full object-cover rounded-lg"
              src={empowerImg}
              alt="empower image"
            />
          <Overlay heading="Express Delivery" paragraph="Fast shipping service next to your door." />
          </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
