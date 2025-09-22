import { Mail, Phone } from "lucide-react";
import Container from "../components/layout/Container";
import useWindowSize from "../utils/WindowSize";
export default function TopHeader() {
  const { width } = useWindowSize();
  return (
    <div className="bg-primary py-2 md:py-0 md:h-[62px] flex items-center">
      <Container className="w-full">
        <div className="flex justify-center text-small md:text-base font-text text-[#D9D9D9] flex-col gap-2 md:gap-0 md:flex-row md:justify-between">
          {/* header info  */}
          <div className="">
            <p>Get A Discount Of Up To 50% For Orders This Month!</p>
          </div>
          {/* header contact  */}
          <div
            className={`flex ${width < 387 ? "flex-col gap-2" : "flex-row"}`}
          >
            <div
              className={`flex border-[#E5F67C] gap-2 ${
                width < 387 ? "border-none pr-0" : "border-r-2 pr-5"
              }`}
            >
              <span>
                <Phone />
              </span>
              <span>+62 864 6444 2222</span>
            </div>
            <div className={`flex gap-2 ${width < 387 ? "pl-0" : "pl-5"}`}>
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
