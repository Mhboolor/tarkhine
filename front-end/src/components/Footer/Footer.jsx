import React from 'react'
import imageSrc from '../../assets/images/footer-desktop.png'
import FooterIcons from './FooterIcons'

const Footer = () => {
  console.log(imageSrc);
  return (
    <footer className="bg-[url('src/assets/images/footer-mobile.png')] bg-center bg-cover w-full">
      <div className="footer-content text-white w-full flex justify-evenly bg-black/60 p-4">
        <div className="footer-right  flex flex-col gap-2">
          <h2 className='text-caption-md'>دسترسی آسان</h2>
          <ul className='flex flex-col gap-1 text-caption-sm'>
            <li>پرسش‌های متداول</li>
            <li>قوانین ترخینه</li>
            <li>حریم خصوصی</li>
            <li><FooterIcons /></li>
          </ul>
        </div>
        <div className="footer-left flex flex-col gap-2">
          <h2 className='text-caption-md'>شعبه‌های ترخینه</h2>
          <ul className='flex flex-col gap-1 text-caption-sm'>
            <li>شعبه اکباتان</li>
            <li>شعبه چالوس</li>
            <li>شعبه اقدسیه</li>
            <li>شعبه ونک</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer