// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CommentsCard from "./CommentsCard";


const CommentsSlider = ({ comments }) => {
    return (
        <div className="px-4 py-2 lg:pr-28">
            <Swiper
                spaceBetween={10}
                navigation={true}
                modules={[Pagination]}
                className="w-full comments-slider"
                slidesPerView={1.5}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                    480: {
                        slidesPerView: 2,
                        spaceBetween : {}
                    },
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 10,
                      },
                      1280: {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                      },
                }}
            >
                {comments.map(comment => (
                    <SwiperSlide>
                        <CommentsCard key={comment.id} {...comment} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CommentsSlider