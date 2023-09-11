import React from 'react'
import FooterIcons from './FooterIcons'

const FooterRightList = () => {
    return (
        <div className="footer-right  flex flex-col gap-2 lg:gap-4">
            <h2 className='text-caption-md lg:text-body-xl lg:font-bold'>دسترسی آسان</h2>
            <ul className='flex flex-col gap-1 lg:gap-4 text-caption-sm lg:text-body-sm'>
                <li>پرسش‌های متداول</li>
                <li>قوانین ترخینه</li>
                <li>حریم خصوصی</li>
                <li><FooterIcons /></li>
            </ul>
        </div>
    )
}

export default FooterRightList