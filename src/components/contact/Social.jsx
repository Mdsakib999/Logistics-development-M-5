import { Facebook, Instagram, Twitter } from "lucide-react";
import Container from "../layout/Container";
import Heading from "../ui/Heading";
export default function Social() {
  return (
    <div className="py-12">
      <Container className="flex justify-between">
        {/* social content */}
        <div className="w-2/3">
          <h6 className="uppercase font-heading text-sm font-medium mb-2">
            Get Started
          </h6>
          <Heading lineHeight="tight">
            Get in touch with us. We're here to assist you.
          </Heading>
        </div>
        {/* social icons  */}
        <div className="">
          <div className="flex pr-8 sm:pr-16 flex-col gap-5">
            <div className="rounded-full border-[#B7B7B7] hover:bg-secondary cursor-pointer p-2 border-1">
              <Facebook size="14" fill="#000" strokeWidth={0} />
            </div>
            <div className="rounded-full border-[#B7B7B7] hover:bg-secondary cursor-pointer p-2 border-1">
              <Instagram size="16" strokeWidth={3} />
            </div>
            <div className="rounded-full border-[#B7B7B7] hover:bg-secondary cursor-pointer p-2 border-1">
              <Twitter size="16" fill="#000" strokeWidth={0} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
