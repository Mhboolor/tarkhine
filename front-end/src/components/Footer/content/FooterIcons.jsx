import { FiTwitter } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialInstagram } from "react-icons/sl";

const FooterIcons = () => {
  return (
    <div className="footer-icons flex w-full gap-2 items-center justify-center text-center md:text-start md:justify-start text-body-md md:text-body-xl">
      <a href="#">
        <FiTwitter />
      </a>
      <a href="#">
        <SlSocialInstagram />
      </a>
      <a href="#">
        <LiaTelegramPlane />
      </a>  
    </div>
  );
};

export default FooterIcons;
