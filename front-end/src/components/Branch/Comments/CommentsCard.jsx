import React from 'react'
import { CiStar } from 'react-icons/ci'

const CommentsCard = ({name, date, text, point}) => {
    return (
        <div className='border border-gray-5 rounded-8 py-4 px-5'>
            <div className='flex w-full gap-2'>
                <div className='flex flex-col items-center gap-1'>
                    <span className={`rounded-[50%] w-14 h-14 md:w-18 md:h-18 lg:w-24 lg:h-24 bg-[url("../src/assets/images/comments/pesar.png")] bg-center bg-cover`}></span>
                    <span className='text-caption-sm md:text-c text-center w-max'>{name}</span>
                    <span className='text-caption-sm text-center'>{date}</span>
                </div>
                <div className='flex w-full flex-col'>
                    <div>
                        <p className='w-full text-justify text-caption-md leading-180 md:text-body-md lg:text-body-lg'>{text}</p>
                    </div>
                    <div className='w-full flex gap-2 items-bottom justify-end'>
                        <span className='w-3 h-3 md:w-5 md:h-5 lg:w-7 lg:h-7'><CiStar /></span>
                        <span className='text-body-sm leading-180 md:text-body-md lg:text-body-lg'>{point}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentsCard