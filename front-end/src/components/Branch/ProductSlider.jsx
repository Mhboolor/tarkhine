// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import FoodCard from "../common/FoodCard/FoodCard"; 

function Slider({ products, title, containerBg, titleColor }) {
  return (
    <div
      className={`flex flex-col gap-4 px-4 py-12 lg:pr-28 ${
        containerBg && containerBg
      }
        `}
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
        className="w-full product-slider"
        slidesPerView={2}
        spaceBetween={20}
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
            spaceBetween: 40,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <FoodCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
