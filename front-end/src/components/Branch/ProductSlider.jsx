// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Slider({ title, titleColor, containerBg, products }) {
  return (
    <div
      className={`flex flex-col gap-6 pr-4 lg:pr-28 ${
        containerBg && containerBg
      }`}
    >
      <div
        className={`text-h6 md:text-h4 font-bold leading-140 text-gray-8 ${
          titleColor && titleColor
        }`}
      >
        {title}
      </div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full h-48 md:h-96 product-slider"
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1650: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
