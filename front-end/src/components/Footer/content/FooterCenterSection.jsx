import React from 'react'

const FooterCenterList = () => {
    return (
        <div className="footer-center flex flex-col gap-2">
            <h2 className='text-caption-md lg:text-body-xl'>شعبه‌های ترخینه</h2>
            <ul className='flex flex-col gap-1 text-caption-sm lg:text-body-sm'>
                <li>شعبه اکباتان</li>
                <li>شعبه چالوس</li>
                <li>شعبه اقدسیه</li>
                <li>شعبه ونک</li>
            </ul>
        </div>
    )
}

export default FooterCenterList