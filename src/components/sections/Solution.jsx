import truckBackside from "../../assets/Solution.png";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import useWindowSize from '../../utils/WindowSize';
export default function Solution() {
    const {width} = useWindowSize();
  return (
    <div className="w-full">
      <Container className={"w-full lg:w-[1102px]"}>
        <Heading className="pb-18"
          fontWeight="bold"
          fontSize={`${width<768 ? '3xl':'default'}`}
          lineHeight="tight"
          align="center"
        >
          WE Provide Worlds Best <br /> Logistic Solutions
        </Heading>
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row border-gray-500">
          {/* image aside */}
          <div className="w-full px-4 md:w-[573px]">
            <img
              className="rounded-l-xl w-full mt-0 md:mt-8 lg:mt-0 h-96 md:h-auto object-cover"
              src={truckBackside}
              alt="truck-backside"
            />
          </div>
          {/* content */}
          <div className="w-full md:[w-500px] lg:w-[529px] flex flex-col justify-center gap-2 sm:gap-8 md:gap-4 lg:gap-16">
            <Heading fontWeight="semibold" fontSize={`${width<768 ? '2xl':'default'}`} className="px-8">Ocean FREIGHT</Heading>
            <div className="bg-secondary px-8 py-4 lg:py-12 flex flex-col gap-2">
              <Heading fontSize={`${width<768 ? '2xl':'default'}`}>Road FREIGHT</Heading>
              <Paragraph className="">
                Elementum augue ut sagittis vel nunc. Posuere id velit integer
                proin aliquam facilisi quis et cras. Leo nulla integer et
                aliquet massa nunc. Ornare id sit ac varius enim ut nisl.
              </Paragraph>
              <Button>Get Started</Button>
            </div>
            <Heading fontWeight="semibold" fontSize={`${width<768 ? '2xl':'default'}`} className="px-8">AIR FREIGHT</Heading>
          </div>
        </div>
      </Container>
    </div>
  );
}
