import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Hero() {
  return (
    <div
      id="hero-section"
      className={`h-full pt-0 sm:pt-6 sm:h-[434px] w-full mx-auto max-w-[1140px] flex flex-col sm:flex-row justify-center mt-0 sm:mt-4 mb-18 sm:gap-10`}
    >
      <div
        className={`bg-primary flex items-center w-full sm:w-1/2 lg:w-[826px] md:justify-center lg:justify-end pr-16 pl-12 md:pl-10 py-8`}
      >
        <span>
          <Heading lineHeight="tight" fontWeight="semibold" color="white">
            <span className="text-secondary">Moving Made Easy:</span> Your
            <br /> Trusted Logistics <br />
            Partner
          </Heading>
        </span>
      </div>
      <div className="w-full sm:w-1/2 lg:w-[404px] flex flex-col gap-2 sm:gap-0 justify-evenly px-12 sm:px-0 pt-4">
        <Paragraph className="" fontSize="lg">
          Elementum augue ut sagittis vel nunc. Posuere id velit integer proin
          aliquam facilisi quis et cras. Leo nulla integer et aliquet massa
          nunc. Ornare id sit ac varius enim ut nisl.
        </Paragraph>
          <Button to="/contact">Get Started</Button>
      </div>
    </div>
  );
}
