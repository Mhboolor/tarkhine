import { MdMenu } from "react-icons/md";

function MenuIcon() {
  return (
    <div className="flex items-center justify-center text-2xl text-primary md:hidden">
      <button>
        <MdMenu />
      </button>
    </div>
  );
}

export default MenuIcon;
