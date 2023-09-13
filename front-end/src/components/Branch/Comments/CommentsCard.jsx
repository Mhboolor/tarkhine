import React from 'react'
import { CiStar } from 'react-icons/ci'

const CommentsCard = ({name, date, text, point}) => {
    return (
        // delete the margin top
        <div className='border border-gray-5 rounded-8 py-4 px-5 mt-7 w-60 lg:w-[20rem] xl:w-[28rem]'>
            <div className='flex w-full gap-2'>
                <div className='flex flex-col items-center gap-1'>
                    <span className={`rounded-[50%] w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-[url("../src/assets/images/comments/pesar.png")] bg-center bg-cover`}></span>
                    <span className='text-caption-sm md:text-c text-center'>{name}</span>
                    <span className='text-caption-sm text-center'>{date}</span>
                </div>
                <div className='flex w-full flex-col'>
                    <p className='w-full text-justify text-caption-sm leading-180 md:text-caption-md lg:text-caption-lg'>{text}</p>
                    <div className='w-full flex gap-2 items-bottom justify-end'>
                        <span className='w-3 h-3'><CiStar /></span>
                        <span className='text-caption-md'>{point}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentsCard