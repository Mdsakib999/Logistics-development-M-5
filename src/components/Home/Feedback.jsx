import { CircleArrowUp } from "lucide-react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay,Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Countup from "../../utils/Countup";
import Container from "../layout/Container";
import FeedbackCard from "../ui/FeedbackCard";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
export default function Feedback() {
  return (
    <div className="py-16 bg-[#f9faf9] sm:py-24">
      <Container>
        {/* content section */}
        <div className="relative mb-24">
          <div className="">
            <h6 className="uppercase font-heading text-sm font-medium">
              Customer Feedback
            </h6>
            <Heading>
              THE proof of our <br /> moving Excellence
            </Heading>
          </div>
          <div className="static sm:absolute right-0 top-8 flex flex-col gap-2">
            <h6 className="text-base">Total Reviews</h6>
            <h1 className="text-5xl">
              <Countup>122</Countup>K
            </h1>
            <p className="absolute bg-secondary left-48 sm:left-auto top-32 sm:top-2 sm:-right-4 flex gap-2 rounded-full px-2 py-1">
              <span className="text-white">24%</span>{" "}
              <CircleArrowUp color="white" />
            </p>
            <Paragraph>Pulvinar commodo arcu</Paragraph>
          </div>
        </div>
        {/* card section */}
        <Swiper
          modules={[Autoplay,Pagination]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <FeedbackCard number="01" />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard number="02" />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard number="03" />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard number="04" />
          </SwiperSlide>
          <SwiperSlide>
            <FeedbackCard number="05" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}
