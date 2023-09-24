import { SlLocationPin } from 'react-icons/sl'


const BranchAddress = () => {
    return (
        <div className="rounded-md border border-gray-4 w-full h-38 px-4 py-6 flex">
            <div className='w-full'>
                <div className='flex gap-1 items-center after:bg-gray-4 relative after:absolute md:after:hidden after:bottom-2 md:after:-bottom-5 after:w-full after:h-[1px] pb-4'>
                    <SlLocationPin className='text-h6 md:text-h5' />
                    <span className="text-body-sm md:text-body-md">آدرس شعبه اکباتان</span>
                </div>
                <div className='text-caption-sm md:text-caption-md text-gray-6 flex flex-col gap-1 text-start px-2  '>
                    <span>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</span>
                    <span>شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱</span>
                    <span>شماره تماس ۲: ۱۲۵۵ ۵۴۸۹ -۰۲۱ </span>
                    <span>ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل</span>
                </div>
            </div>
            <div className='hidden md:flex w-full justify-end '>
                <iframe
                    className='rounded-4 border-gray-4 border'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d103659.83726718918!2d51.3933312!3d35.71712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695587475318!5m2!1sen!2s"
                    width="70%"
                ></iframe>
            </div>
        </div>
    )
}

export default BranchAddress    