import React from 'react'
import { FiTwitter } from 'react-icons/fi'
import { LiaTelegramPlane } from 'react-icons/lia'
import {SlSocialInstagram} from 'react-icons/sl'

const FooterIcons = () => {
  return (
      <div className='footer-icons flex w-full gap-2 items-center'>
          <a href="#"><FiTwitter className='text-body-md md:text-body-lg'/></a>
          <a href="#"><SlSocialInstagram className='text-body-md md:text-body-lg'/></a>
          <a href="#"><LiaTelegramPlane className='text-body-lg md:text-body-xl'/></a>
    </div>
  )
}

export default FooterIcons