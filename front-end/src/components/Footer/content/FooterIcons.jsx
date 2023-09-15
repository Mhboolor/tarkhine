import { FiTwitter } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import { SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom";

const FooterIcons = () => {
  return (
    <div className="footer-icons flex w-full gap-5 items-center justify-center text-center md:text-start md:justify-start text-body-md md:text-body-xl">
      <Link to={"/"} className="hover:text-primary transition ease-in-out">
        <FiTwitter />
      </Link>
      <Link to={"/"} className="hover:text-primary transition ease-in-out">
        <SlSocialInstagram />
      </Link>
      <Link to={"/"} className="hover:text-primary transition ease-in-out">
        <LiaTelegramPlane />
      </Link>
    </div>
  );
};

export default FooterIcons;
