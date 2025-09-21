import { Mail, Phone } from "lucide-react";
import Container from "../components/layout/Container";
export default function TopHeader() {
  return (
    <div className="bg-primary py-2 md:py-0 md:h-[62px] flex items-center">
      <Container>
        <div className="flex justify-center text-small md:text-base font-text text-[#D9D9D9] flex-col gap-2 md:gap-0 md:flex-row md:justify-between">
            {/* header info  */}
          <div className="">
            <p>Get A Discount Of Up To 50% For Orders This Month!</p>
          </div>
          {/* header contact  */}
          <div className="flex">
            <div className="flex border-r-2 border-[#E5F67C] gap-2  pr-5">
              <span>
                <Phone />
              </span>
              <span>+62 864 6444 2222</span>
            </div>
            <div className="flex gap-2 pl-5">
              <span>
                <Mail />
              </span>
              <span>hi@logistic.com</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
