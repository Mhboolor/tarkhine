import React from 'react'
import imageSrc from '../../assets/images/footer-desktop.png'
import FooterRightList from './content/FooterRightSection';
import FooterCenterList from './content/FooterCenterSection';
import FooterLeftSection from './content/FooterLeftSection';

const Footer = () => {
  console.log(imageSrc);
  return (
    <footer
      className="
      bg-[url('src/assets/images/footer-mobile.png')]
      lg:bg-[url('src/assets/images/footer-desktop.png')]
      bg-center bg-cover w-full">
      <div className="footer-content text-white w-full flex justify-evenly bg-black/60 p-4">
        <FooterRightList />
        <FooterCenterList />
        <FooterLeftSection />
      </div>
    </footer>
  )
}

export default Footer