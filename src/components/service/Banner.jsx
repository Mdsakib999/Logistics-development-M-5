import image1 from "../../assets/Image1.png";
import image2 from "../../assets/Image2.png";
import image3 from "../../assets/Image3.png";
import image4 from "../../assets/Image4.png";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Banner() {
  return (
    <div className="py-16">
      {/* content section */}
      <div className="w-4/5 md:w-3/5 lg:w-3/5 mx-auto mb-12">
        <Heading align="center" className="my-4 mx-auto" lineHeight="tight">
          Simplify Your Shipping Experience
        </Heading>
        <Paragraph align="center">
          You can return any item within 30 days of purchase as long as it’s in
          its original condition with tags still attached. Simply contact our
          customer service team, and they will guide you through the process.
          Please note that certain items, such as swimwear and final sale items,
          are non-returnable.
        </Paragraph>
      </div>
      {/* image section */}
      <div className="w-full h-max sm:h-[510px] grid gap-4 grid-cols-1 sm:grid-cols-2 grid-rows-1 md:grid-cols-5 sm:grid-rows-2 px-4">
        <div className="col-span-1 md:col-span-2 ">
          <img
            className=" object-cover rounded-xl w-full h-full"
            src={image1}
            alt="image1"
          />
        </div>
        <div className="col-span-1 h-60 sm:h-auto md:col-span-1 md:row-span-2 ">
          <img className="h-full w-full object-cover rounded-xl" src={image3} alt="image3" />
        </div>
        <div className="h-60 sm:h-auto col-span-1 md:col-span-2 md:row-span-2 ">
          <img
            className=" object-cover rounded-xl h-full w-full"
            src={image4}
            alt="image4"
          />
        </div>
        <div className="col-span-1 md:col-span-2 ">
          <img
            className="w-full rounded-xl  h-full object-cover"
            src={image2}
            alt="image2"
          />
        </div>
      </div>
    </div>
  );
}
