import { Link } from "react-router-dom";

const FooterCenterList = () => {
  return (
    <div className="footer-center flex flex-col gap-2 md:gap-4">
      <h2 className="text-caption-md md:text-body-xl md:font-bold">
        شعبه‌های ترخینه
      </h2>
      <ul className="flex flex-col gap-2 md:gap-4 text-caption-sm md:text-body-lg">
        <li>
          <Link
            to="/branch"
            className="hover:text-primary transition ease-in-out"
          >
            شعبه اکباتان
          </Link>
        </li>
        <li>
          <Link
            to="/branch"
            className="hover:text-primary transition ease-in-out"
          >
            شعبه ونک
          </Link>
        </li>
        <li>
          <Link
            to="/branch"
            className="hover:text-primary transition ease-in-out"
          >
            شعبه چالوس
          </Link>
        </li>
        <li>
          <Link
            to="/branch"
            className="hover:text-primary transition ease-in-out"
          >
            شعبه اقدسیه
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterCenterList;
