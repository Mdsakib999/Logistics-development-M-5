import Paragraph from "../ui/Paragraph";
import Heading from "./Heading";
export default function WorkCard({ step, heading,src }) {
  return (
    <div className="w-2/3 mx-auto sm:w-1/3 flex flex-col gap-4 items-center">
      <p className="border-2 text-sm px-4 py-2 rounded-full border-[#EDF0F2]">
        Step {step}
      </p>
      <div className="bg-secondary rounded-lg p-12">
        <img src={src} alt="package icon" />
      </div>
      <Heading
        align="center"
      >
        {heading}
      </Heading>
      <Paragraph align="center">
        At FastGo, we believe in providing our clients with personalized and
        efficient logistics solutions that meet their unique needs.
      </Paragraph>
    </div>
  );
}
