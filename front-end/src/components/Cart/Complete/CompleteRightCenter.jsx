import { HiOutlineLocationMarker } from 'react-icons/hi'
import { AiOutlinePlusCircle } from 'react-icons/ai'


const CompleteRightCenter = () => {
    return (
        <div className="rounded-md border border-gray-4 gap-5 md:px-10 md:py-7 px-4 py-2 flex flex-col w-full">
            <div className="flex justify-between relative after:bg-gray-5 w-full after:absolute after:-bottom-5 after:w-full after:h-[1px]">
                <span className="flex items-center gap-1">
                    <HiOutlineLocationMarker className = 'text-body-md'/>
                    <span className="text-body-sm">آدرس ها</span>
                </span>
                <span className='text-primary flex items-center gap-1'>
                    <AiOutlinePlusCircle className='text-body-sm' />
                    <span className='text-caption-md'>افزودن آدرس</span>
                </span>
            </div>
            <div className="flex justify-center items-center h-48 w-full p-4 relative">
                <img src="../src/assets/images/cart/spider-tar.png" className="w-max h-full opacity-70" alt="" srcset="" />
                <span className="w-full h-full absolute top-[50%] text-body-sm text-gray-6">شما در حال حاضر هیچ آدرسی ثبت نکرده اید!</span>
            </div>
        </div>
    )
}

export default CompleteRightCenter