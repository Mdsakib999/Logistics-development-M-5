import { Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import useWindowSize from "../utils/WindowSize";
export default function TopHeader() {
  const { width } = useWindowSize();
  const [showTopBar, setShowTopBar] = useState(false);
  useEffect(() => {
    const bannerEl = document.getElementById("topBanner-section");
    if (!bannerEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowTopBar(entry.isIntersecting);
        });
      },
      { threshold: 0.8 }
    );

    observer.observe(bannerEl);

    return () => {
      if (bannerEl) observer.unobserve(bannerEl);
    };
  }, []);
  return (
    <div
      className={`bg-primary py-2 md:py-0 md:h-[62px] hidden md:flex items-center border-b-4 transition-all duration-500 overflow-hidden 
        ${showTopBar ? "max-h-20 opacity-100" : "max-h-0 opacity-0"} `}
    >
      <Container className="w-full">
        <div className="flex justify-center items-center text-small md:text-base font-text text-[#D9D9D9] flex-col gap-2 md:gap-0 md:flex-row md:justify-between">
          {/* header info  */}
          <div className="flex flex-wrap md:w-5/12">
            <p className="text-center sm:text-start">
              Get A Discount Of Up To 50% For Orders This Month!
            </p>
          </div>
          {/* header contact  */}
          <div
            className={`flex h-max ${width < 387 ? "flex-col gap-2" : "flex-row"}`}
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
