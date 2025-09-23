import worksImage from "../../assets/works.png";
import Container from "../layout/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import WorkCard from "../ui/WorkCard";
export default function HowItWorks() {
  return (
    <div>
      <Container className="py-12 lg:py-16">
        {/* content section */}
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row">
          {/* image content */}
          <div className="flex justify-end md:justify-start items-center w-full mx-auto md:w-1/2">
            <img
              src={worksImage}
              className="rounded-lg"
              alt="product-shifting image"
            />
          </div>
          {/* text content */}
          <div className="flex justify-center flex-col px-4 lg:px-1 pb-12 gap-4 w-full md:w-1/2">
            <h6 className="uppercase font-heading tex-sm font-medium">
              How It Works
            </h6>
            <Heading
              lineHeight="tight"
            >
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
        <div className="flex my-12 flex-col sm:flex-row gap-12 sm:gap-16">
          <WorkCard heading="Request a quote" step="1"></WorkCard>
          <WorkCard heading="Provide details" step="2"></WorkCard>
          <WorkCard heading="Schedule pick-up" step="3"></WorkCard>
        </div>
      </Container>
    </div>
  );
}
