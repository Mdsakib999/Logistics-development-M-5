import Paragraph from "../ui/Paragraph";
import Heading from "./Heading";
export default function WorkCard({ step, heading,src }) {
  return (
    <div className="w-full mx-auto min-h-[460px] flex flex-col gap-4 items-center">
      <p className="border-2 text-sm px-4 py-2 rounded-full border-[#EDF0F2]">
        Step {step}
      </p>
      <div className="bg-secondary rounded-lg p-12">
        {src}
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
