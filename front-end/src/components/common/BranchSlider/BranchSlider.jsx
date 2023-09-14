// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

function BranchSlider({ data }) {
  return (
    <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="w-full h-48 md:h-96 hero-slider"
    >
      {data.map((slide) => (
        <SwiperSlide
          key={slide.id}
          className={`flex items-center justify-center`}
        >
          <img
            src={slide.image}
            alt="Slider_Image"
            className="w-full h-full absolute left-0 top-0"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BranchSlider;
