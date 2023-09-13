// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import CommentsCard from "./CommentCard";


const CommentsSlider = ({ comments }) => {
    return (
        <div className="px-4 py-2 lg:pr-28">
            <Swiper
                spaceBetween={20}
                modules={[Pagination, Autoplay]}
                className="w-full comments-slider"
                slidesPerView={1.5}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000 }}
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