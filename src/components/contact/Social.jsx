import { Facebook, Instagram, Twitter } from "lucide-react";
import Container from "../layout/Container";
import Heading from "../ui/Heading";
export default function Social() {
  return (
    <div className="pt-12 sm:pt-0 pb-12">
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
            <div className="rounded-full hover:scale-120 duration-300 border-[#B7B7B7]  cursor-pointer p-4 border-1">
              <Facebook color='#1877F2' size="16" fill="#1877F2" strokeWidth={0} />
            </div>
            <div className="rounded-full hover:scale-120 duration-300 border-[#B7B7B7] cursor-pointer p-4 border-1">
              <Instagram color="#E1306C" size="16" strokeWidth={3} />
            </div>
            <div className="rounded-full hover:scale-120 duration-300 border-[#B7B7B7]  cursor-pointer p-4 border-1">
              <Twitter size="16" fill="#1DA1F2" strokeWidth={0} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
