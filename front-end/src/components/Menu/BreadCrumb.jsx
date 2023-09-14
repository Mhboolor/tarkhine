import { MdArrowBackIosNew } from 'react-icons/md'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';



const BreadCrumb = () => {
    const breacCrumbItems = [
        {
            id: 1,
            title: 'غذاهای ایرانی'
        },
        {
            id: 2,
            title: 'غذاهای غیر ایرانی'
        },
        {
            id: 3,
            title: 'پیتزاها'
        },
        {
            id: 4,
            title: 'ساندویچ ها'
        },
        {
            id: 5,
            title: 'ساندویچ ها'
        },
        {
            id: 6,
            title: 'ساندویچ ها'
        },
        {
            id: 7,
            title: 'ساندویچ ها'
        },
    ]
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="breadcrumb-slider w-full "
                slidesPerView= "auto"
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
            >
                <div>
                    {breacCrumbItems.map((breadCrumb) => (
                        <SwiperSlide key={breadCrumb.id}>
                            <div key={breadCrumb.id} className="px-2 bg-gray-3 text-caption-sm md:text-body-md flex gap-1 items-center rounded-md w-max">
                                <span>{breadCrumb.title}</span>
                                <span><MdArrowBackIosNew /></span>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>

        </>
    )
}

export default BreadCrumb