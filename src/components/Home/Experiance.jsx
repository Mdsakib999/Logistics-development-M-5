import experianceImg from "../../assets/experiance.png";
import Countup from "../../utils/Countup";
import Container from "../layout/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Experiance() {
  return (
    <div className="w-full  bg-primary border">
      <Container className="flex flex-col w-full md:flex-row py-12 lg:py-16">
        {/* image section */}
        <div className="lg:block flex flex-col justify-end md:justify-center w-full sm:w-[460px] mx-auto sm:pr-12">
          <img
            className="w-full rounded-lg"
            src={experianceImg}
            alt="truck front side image"
          />
        </div>
        {/* content section */}
        <div className="w-full sm:w-[560px] ml-auto pl-4 flex flex-col space-y-4">
          <Heading color="white" className="mt-4 " lineHeight="tight">Simplify Your Shipping Experience </Heading>
          <Paragraph>
            Elementum fames et massa molestie. Dolor habitasse id sit cras
            ultricies sit. Morbi sollicitudin quam enim est turpis aliquet. Diam
            in id quis diam. Lacus vestibulum habitant sollicitudin egestas.
            Porttitor enim duis dui in mi.
          </Paragraph>
          <ul className="flex mt-4">
            <li className="border-r-1 border-blue-500 pr-5">
              <span className= "text-3xl sm:text-4xl lg:text-5xl text-secondary">
                <Countup>32</Countup> +
              </span>
              <p className="text-[#DEE2DD] text-base mt-1">Years of Experiance</p>
            </li>
            <li className="border-r-1 border-blue-500 px-4 lg:px-8">
              <span className="text-3xl sm:text-4xl lg:text-5xl text-secondary">
                <Countup>12</Countup> K
              </span>
              <p className="text-[#DEE2DD] text-base mt-1">Satisfied Clients</p>
            </li>
            <li className="px-4 sm:px-8">
              <span className="text-3xl sm:text-4xl lg:text-5xl text-secondary">
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
