import truckBackside from "../../assets/Solution.png";
import Container from "../layout/Container";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Solution() {
  return (
    <div>
      <Container className={"w-[1102px]"}>
        <Heading
          fontWeight="bold"
          fontSize="default"
          lineHeight="tight"
          align="center"
        >
          WE Provide Worlds Best <br /> Logistic Solutions
        </Heading>
        <div className="flex border-gray-500">
          {/* image aside */}
          <div className="w-[573px]">
            <img
              className="rounded-l-xl w-full"
              src={truckBackside}
              alt="truck-backside"
            />
          </div>
          {/* content */}
          <div className="w-[529px] flex flex-col justify-center gap-16">
            <Heading className="px-8">Ocean FREIGHT</Heading>
            <div className="bg-secondary px-8  py-12 flex flex-col gap-4">
              <Heading>Road FREIGHT</Heading>
              <Paragraph>
                Elementum augue ut sagittis vel nunc. Posuere id velit integer
                proin aliquam facilisi quis et cras. Leo nulla integer et
                aliquet massa nunc. Ornare id sit ac varius enim ut nisl.
              </Paragraph>
              <Button>Get Started</Button>
            </div>
            <Heading className="px-8">AIR FREIGHT</Heading>
          </div>
        </div>
      </Container>
    </div>
  );
}
