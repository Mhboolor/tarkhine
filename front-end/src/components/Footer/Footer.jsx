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
      bg-center w-full h-max bg-cover">
      <div className="footer-content text-white w-full flex justify-start gap-14 lg:gap-0 md:justify-evenly bg-black/70 p-9">
        <FooterRightList />
        <FooterCenterList />
        <FooterLeftSection />
      </div>
    </footer>
  )
}

export default Footer