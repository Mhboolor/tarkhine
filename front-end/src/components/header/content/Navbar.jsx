import { useState } from "react";
import { MdArrowDropDown, MdClose, MdOutlineAddHomeWork } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

import { BiHomeSmile, BiHomeHeart, BiPhoneCall } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { HiOutlineUsers } from "react-icons/hi";

function Navbar({ showMenuHandler, showMenu }) {
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
    <nav
      className={`absolute bg-white top-0 right-0 h-screen w-full max-w-[256px] duration-200 z-50 overflow-y-auto ${
        showMenu ? "translate-x-0" : "translate-x-96"
      }
      lg:static lg:top-auto lg:right-auto lg:bg-transparent lg:w-auto lg:max-w-none lg:h-auto lg:translate-x-0 lg:overflow-y-visible`}
    >
      <div className="flex items-start justify-between relative bg-cover bg-center bg-no-repeat bg-[url('../src/assets/images/header/bg-sm-menu.jpg')] text-2xl text-white px-4 py-6 lg:hidden">
        <div className="absolute left-0 top-0 bg-black/50 w-full h-full"></div>
        <img
          src="../src/assets/images/header/logo-white.png"
          alt="Logo_Images"
          className="w-16 h-8 z-10 lg:w-auto lg:h-auto"
        />
        <button className="z-10" onClick={showMenuHandler}>
          <MdClose />
        </button>
      </div>
      <ul className="text-gray-7 leading-180 flex flex-col items-start text-caption-lg divide-y px-4 lg:flex-row lg:items-center lg:justify-center lg:text-body-lg lg:gap-6 lg:px-0 lg:divide-none">
        {menu.map((link) => (
          <li key={link.id} className="w-full relative lg:w-auto group">
            <NavLink
              to={link.link}
              className={`flex items-center justify-between py-1 lg:py-0`}
            >
              <div className="flex items-center gap-2">
                <span className="lg:hidden">{link.icon}</span>
                {link.title}
              </div>
              {link.children.length > 0 && <MdArrowDropDown />}
            </NavLink>
            {link.children.length > 0 && (
              <ul className="flex-col px-6 hidden lg:absolute lg:top-full lg:bg-white lg:shadow-drop-2 lg:rounded-4 lg:w-32 lg:py-1 lg:px-2 divide-y text-sm text-gray-8 group-hover:flex">
                {link.children.map((sub, index) => (
                  <li key={index}>
                    <Link to={sub.link} className="flex py-2">
                      {sub.title}
                    </Link>
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
