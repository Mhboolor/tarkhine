import Buttons from "./content/Buttons";
import Logo from "./content/Logo";
import Navbar from "./content/Navbar";
import MenuIcon from "./content/MenuIcon";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-drop-2">
      <div className="container m-auto flex items-center justify-between py-4 px-4 md:px-0">
        <MenuIcon showMenuHandler={showMenuHandler} />
        <Logo />
        <div
          className={`absolute left-0 top-0 w-full h-full z-20 bg-black/10 ${
            showMenu ? "flex" : "hidden"
          } lg:hidden`}
          onClick={showMenuHandler}
        ></div>
        <Navbar showMenu={showMenu} showMenuHandler={showMenuHandler} />
        <Buttons />
      </div>
    </header>
  );
}

export default Header;
