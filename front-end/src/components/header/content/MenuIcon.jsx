import { MdMenu } from "react-icons/md";

function MenuIcon({ showMenuHandler }) {
  return (
    <div className="flex items-center justify-center text-2xl text-primary lg:hidden">
      <button onClick={showMenuHandler}>
        <MdMenu />
      </button>
    </div>
  );
}

export default MenuIcon;
