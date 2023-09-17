import React from 'react'
import { BsBag, BsTruck } from 'react-icons/bs'
import { FaTruckArrowRight } from 'react-icons/fa6'

const CompleteRightTop = () => {
    return (
        <>
            <div className="rounded-md border border-gray-4 flex flex-col md:flex-row justify-between md:px-10 md:py-7 px-4 py-2 md:items-center">
                <div className='flex items-center gap-1 relative after:bg-gray-5 w-full after:absolute after:bottom-2 md:after:-bottom-5 after:w-full after:h-[1px] pb-4'>
                    <BsTruck className='md:text-h4 text-body-md' />
                    <span className='md:text-body-md text-body-sm font-bold'>روش تحویل سفارش</span>
                </div>
                <div className='text-caption-md text-gray-6'>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" className='w-4 h-4 border border-gray-4 outline-none' />
                        <span>ارسال توسط پیک</span>
                        <FaTruckArrowRight />
                    </div>
                    <div className='flex items-center gap-1'>
                        <input type="checkbox" />
                        <span>تحویل حضوری</span>
                        <BsBag />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompleteRightTop