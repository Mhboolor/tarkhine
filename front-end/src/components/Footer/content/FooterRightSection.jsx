import FooterIcons from "./FooterIcons";
import { Link } from "react-router-dom";

const FooterRightList = () => {
  return (
    <div className="footer-right  flex flex-col gap-2 md:gap-4">
      <h2 className="text-caption-md md:text-body-xl md:font-bold">
        دسترسی آسان
      </h2>
      <ul className="flex flex-col gap-2 md:gap-4 text-caption-sm md:text-body-lg">
        <li className="hover:text-primary transition ease-in-out">
          <Link to="/branch">پرسش‌های متداول</Link>
        </li>
        <li className="hover:text-primary transition ease-in-out">
          <Link to="/branch">قوانین ترخینه</Link>
        </li>
        <li className="hover:text-primary transition ease-in-out">
          <Link to="/branch">حریم خصوصی</Link>
        </li>
        <li>
          <Link to="/branch">
            <FooterIcons />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterRightList;
