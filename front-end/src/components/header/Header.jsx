import Buttons from "./content/Buttons";
import Logo from "./content/Logo";
import Navbar from "./content/Navbar";
import MenuIcon from "./content/MenuIcon";

function Header() {
  return (
    <header className="bg-white shadow-drop-2">
      <div className="container m-auto flex items-center justify-between py-8 px-4 md:px-0">
        <MenuIcon />
        <Logo />
        <Navbar />
        <Buttons />
      </div>
    </header>
  );
}

export default Header;
