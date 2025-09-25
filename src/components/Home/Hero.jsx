import useWindowSize from "../../utils/WindowSize";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Hero() {
  const { width } = useWindowSize();
  return (
    <div id="hero-section"
      className={`h-full sm:h-[434px] w-full mx-auto max-w-[1140px] flex justify-center mt-0 sm:mt-4 mb-18 sm:gap-10 ${width < 387 && "flex-col"}`}
    >
      <div
        className={`bg-primary flex items-center w-1/2 lg:w-[826px] md:justify-center lg:justify-end pr-16 pl-4 md:pl-10 ${
          width < 387 && "w-full py-8"
        }`}
      >
        <span>
          <Heading
            lineHeight="tight"
            fontWeight="semibold"
            color="white"
          >
            <span className="text-[#E5F67C]">Moving Made Easy:</span> Your
            <br /> Trusted Logistics <br />
            Partner
          </Heading>
        </span>
      </div>
      <div className="w-full sm:w-1/2 lg:w-[404px] flex flex-col gap-2 sm:gap-0 justify-evenly px-2 sm:px-0 pt-2 sm:pt-4">
        <Paragraph className="px-2" fontSize="lg">
          Elementum augue ut sagittis vel nunc. Posuere id velit integer proin
          aliquam facilisi quis et cras. Leo nulla integer et aliquet massa
          nunc. Ornare id sit ac varius enim ut nisl.
        </Paragraph>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
