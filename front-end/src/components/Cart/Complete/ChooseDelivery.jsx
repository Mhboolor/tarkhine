import React, { useState } from 'react'
import { BsBag, BsTruck } from 'react-icons/bs'
import { FaTruckArrowRight } from 'react-icons/fa6'

const ChooseDelivery = (props) => {
    const [isCourierClicked, setIsCourierClicked] = useState(true)
    const [isByPersonClicked, setIsByPersonClicked] = useState(false)

    const courierClickHandler = () => {
        setIsCourierClicked(prev => prev = !prev)
        setIsByPersonClicked(false)
        props.deliveryChangeHandler()
    }
    const byPersonClickHandler = () => {
        setIsByPersonClicked(prev => prev = !prev)
        setIsCourierClicked(false)
        props.deliveryChangeHandler()
    }

    return (
        <>
            <div
                className="
                rounded-md border border-gray-4 flex flex-col justify-between w-full px-4 py-6 gap-2 
                md:flex-row md:py-7 md:justify-center
                ">
                <div className='flex flex-row w-full items-center gap-2 relative after:bg-gray-4 after:absolute md:after:hidden after:bottom-2 md:after:-bottom-5 after:w-full after:h-[1px] pb-4 md:pb-0'>
                    <BsTruck className='md:text-h4 text-body-md' />
                    <span className='md:text-body-md text-body-sm'>روش تحویل سفارش</span>
                </div>
                <div
                    className='
                    text-caption-md text-gray-6 flex flex-row w-full items-center gap-2 pt-1
                    md:text-body-sm md:justify-center '>
                    <span onClick={courierClickHandler} className={`w-3 h-3 p-[1px] rounded-full border border-gray-4`}>
                        <span className={`w-full h-full rounded-full bg-success-light ${isCourierClicked ? 'block' : 'hidden'}`}></span>
                    </span>
                    <span className='flex flex-col items-start'>
                        <span className='text-caption-md md:text-body-sm'>ارسال توسط پیک</span>
                        <span className='hidden md:block text-caption-sm'>توسط پیک رستوران ارسال شود.</span>
                    </span>
                    <FaTruckArrowRight className='md:text-h4 text-body-md' />
                </div>
                <div
                    className='text-caption-md text-gray-6 flex flex-row w-full items-center gap-2 pt-1
                    md:text-body-sm md:justify-center'>
                    <span onClick={byPersonClickHandler} className={`w-3 h-3 p-[1px] rounded-full border border-gray-4`}>
                        <span className={`w-full h-full rounded-full bg-success-light ${isByPersonClicked ? 'block' : 'hidden'}`}></span>
                    </span>
                    <span className='flex flex-col items-start'>
                        <span className='text-caption-md md:text-body-sm'>تحویل حضوری</span>
                        <span className='hidden md:block text-caption-sm'>توسط پیک رستوران ارسال شود.</span>
                    </span>
                    <BsBag className='md:text-h4 text-body-md' />
                </div>
            </div>
        </>
    )
}

export default ChooseDelivery