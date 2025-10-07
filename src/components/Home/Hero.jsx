import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Hero() {
  return (
    <div
      id="hero-section"
      className={`h-full bg-gray-600 sm:bg-white py-12 sm:h-[434px] w-full mx-auto flex flex-col sm:flex-row justify-between mb-36 sm:gap-10`}
    >
      <div
        className={`sm:bg-primary flex items-center w-full sm:w-1/2 lg:w-[826px] md:justify-center lg:justify-end sm:pr-10 px-4 sm:pl-12 md:pl-10 py-8`}
      >
        <span>
          <Heading lineHeight="tight" fontWeight="semibold" color="white">
            <span className="text-secondary">Moving Made Easy:</span> Your
            <br /> Trusted Logistics <br />
            Partner
          </Heading>
        </span>
      </div>
      <div className="w-full sm:w-3/5 flex flex-col gap-2 pl-4 sm:pl-12 sm:gap-0 justify-evenly sm:px-0 sm:pt-4">
        <Paragraph  className="w-4/5 sm:w-2/3 text-white sm:text-primary pb-4 sm:pb-0" fontSize="lg">
          Elementum augue ut sagittis vel nunc. Posuere id velit integer proin
          aliquam facilisi quis et cras. Leo nulla integer et aliquet massa
          nunc. Ornare id sit ac varius enim ut nisl.
        </Paragraph>
          <Button to="/contact">Get Started</Button>
      </div>
    </div>
  );
}
