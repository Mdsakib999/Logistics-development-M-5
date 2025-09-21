import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Button from '../ui/Button'
import useWindowSize from "../ui/WindowSize";
export default function Hero() {
    const {width} = useWindowSize();
  return (
    <div className="h-[434px] flex gap-10">
      <div className="bg-primary flex items-center uppercase md:w-1/2 lg:w-[826px] md:justify-center lg:justify-end pr-16 md:pl-10">
        <span>
          <Heading
            lineHeight="tight"
            fontSize={ `${width<1080 ? "3xl":"5xl" }`}
            fontWeight="semibold"
            color="white"
          >
            <span className="text-[#E5F67C]">Moving Made Easy:</span> Your
            <br /> Trusted Logistics <br />
            Partner
          </Heading>
        </span>
      </div>
      <div className="w-[404px] flex flex-col justify-evenly py-4">
        <Paragraph fontSize="lg">
          Elementum augue ut sagittis vel nunc. Posuere id velit integer proin
          aliquam facilisi quis et cras. Leo nulla integer et aliquet massa
          nunc. Ornare id sit ac varius enim ut nisl.
        </Paragraph>
        <Button>Get Started</Button>
      </div>
    </div>
  );
}
