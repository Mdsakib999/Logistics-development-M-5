import experianceImg from "../../assets/experiance.png";
import Countup from "../../utils/Countup";
import Container from "../layout/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Experiance() {
  return (
    <div className="w-full bg-primary">
      <Container className="flex py-4">
        {/* image section */}
        <div className="border w-[460px] pr-12">
          <img
            className="w-full rounded-lg"
            src={experianceImg}
            alt="truck front side image"
          />
        </div>
        {/* content section */}
        <div className="w-[560px] ml-auto border pl-4 flex flex-col space-y-4">
          <Heading color="white" className="mt-4" fontSize="5xl" lineHeight="tight">Simplify Your Shipping Experience </Heading>
          <Paragraph>
            Elementum fames et massa molestie. Dolor habitasse id sit cras
            ultricies sit. Morbi sollicitudin quam enim est turpis aliquet. Diam
            in id quis diam. Lacus vestibulum habitant sollicitudin egestas.
            Porttitor enim duis dui in mi.
          </Paragraph>
          <ul className="flex mt-4">
            <li className="border-r-1 border-blue-500 pr-10">
              <span className="text-5xl text-secondary">
                <Countup>32</Countup> +
              </span>
              <p className="text-[#DEE2DD] text-base mt-1">Years of Experiance</p>
            </li>
            <li className="border-r-1 border-blue-500 px-8">
              <span className="text-5xl text-secondary">
                <Countup>12</Countup> K
              </span>
              <p className="text-[#DEE2DD] text-base mt-1">Satisfied Clients</p>
            </li>
            <li className=" px-8">
              <span className="text-5xl text-secondary">
                <Countup>20</Countup> +
              </span>
              <p className="text-[#DEE2DD] text-base mt-1">Countries Served</p>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
