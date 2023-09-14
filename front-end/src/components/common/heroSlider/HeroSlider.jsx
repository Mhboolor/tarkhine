// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function HeroSlider({ data, button }) {
  return (
    <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation, Pagination]}
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
          <div className="relative w-full h-full z-10 flex flex-col items-center justify-center gap-10 md:gap-20 bg-black/50 text-center">
            {slide.title && (
              <p className="text-h6 md:text-h2 font-bold text-white">
                {slide.title}
              </p>
            )}
            {button && (
              <button className="text-white bg-primary text-caption-sm px-4 md:text-button-lg leading-180 font-medium rounded-8 py-8 md:px-7">
                {button}
              </button>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
