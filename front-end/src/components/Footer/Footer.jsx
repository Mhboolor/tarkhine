import FooterRightList from './content/FooterRightSection';
import FooterCenterList from './content/FooterCenterSection';
import FooterLeftSection from './content/FooterLeftSection';

const Footer = () => {
  return (
    <footer
      className="
      mt-5
      bg-[url('src/assets/images/footer/footer-mobile.png')]
      lg:bg-[url('src/assets/images/footer/footer-desktop.png')]
      bg-center w-full h-max bg-cover">  
      <div className="footer-content text-white w-full flex justify-center text-center md:text-start gap-14 lg:gap-0 md:justify-evenly bg-black/70 p-9">
        <FooterRightList />
        <FooterCenterList />
        <FooterLeftSection />
      </div>
    </footer>
  )
}

export default Footer