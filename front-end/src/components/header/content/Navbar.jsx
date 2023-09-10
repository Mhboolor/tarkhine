import { useState } from "react";
import { MdArrowDropDown, MdClose, MdOutlineAddHomeWork } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

import { BiHomeSmile, BiHomeHeart, BiPhoneCall } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { HiOutlineUsers } from "react-icons/hi";

function Navbar() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      link: "",
      title: "صفحه اصلی",
      isActive: false,
      icon: <BiHomeSmile />,
      children: [],
    },
    {
      id: 2,
      link: "",
      title: "شعبه",
      icon: <BiHomeHeart />,
      children: [
        { link: "", title: "اکباتان" },
        { link: "", title: "چالوس" },
        { link: "", title: "اقدسیه" },
        { link: "", title: "ونک" },
      ],
    },
    {
      id: 3,
      link: "",
      title: "منو",
      icon: <GiNotebook />,
      children: [
        { link: "", title: "غذای اصلی" },
        { link: "", title: "پیش غذا" },
        { link: "", title: "دسر" },
        { link: "", title: "نوشیدنی" },
      ],
    },
    {
      id: 4,
      link: "",
      title: "اعطای نمایندگی",
      icon: <MdOutlineAddHomeWork />,
      children: [],
    },
    {
      id: 5,
      link: "",
      title: "درباره ما",
      icon: <HiOutlineUsers />,
      children: [],
    },
    {
      id: 6,
      link: "",
      title: "تماس با ما",
      icon: <BiPhoneCall />,
      children: [],
    },
  ]);

  return (
    <nav className="absolute bg-white top-0 right-0 h-screen w-full max-w-[256px] md:static md:top-auto md:right-auto md:bg-transparent md:w-auto md:max-w-none md:h-auto">
      <div className="flex items-start justify-between relative bg-cover bg-center bg-no-repeat bg-[url('../src/assets/images/header/bg-sm-menu.jpg')] text-2xl text-white px-4 py-6 md:hidden">
        <div className="absolute left-0 top-0 bg-black/50 w-full h-full"></div>
        <img
          src="../src/assets/images/header/logo-white.png"
          alt="Logo_Images"
          className="w-16 h-8 z-10 md:w-auto md:h-auto"
        />
        <button className="z-10">
          <MdClose />
        </button>
      </div>
      <ul className="text-gray-7 leading-180 flex flex-col items-start text-caption-lg divide-y px-4 md:flex-row md:items-center md:justify-center md:text-body-lg md:gap-6 md:px-0 md:divide-none">
        {menu.map((link) => (
          <li key={link.id} className="w-full md:w-auto">
            <NavLink
              to={link.link}
              className={`flex items-center justify-between py-1 md:py-0`}
            >
              <div className="flex items-center gap-2">
                <span className="md:hidden">{link.icon}</span>
                {link.title}
              </div>
              {link.children.length > 0 && <MdArrowDropDown />}
            </NavLink>
            {link.children.length > 0 && (
              <ul className="hidden">
                {link.children.map((sub, index) => (
                  <li key={index}>
                    <Link to={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
