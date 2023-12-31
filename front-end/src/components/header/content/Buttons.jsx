import { MdSearch } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

function Buttons() {
  return (
    <div className="flex items-center justify-center gap-2 text-primary text-2xl">
      <button className="items-center justify-center p-8 rounded-4 bg-tint-1 hidden lg:flex">
        <MdSearch />
      </button>
      <button className="flex items-center justify-center p-8 rounded-4 bg-tint-1">
        <AiOutlineShoppingCart />
      </button>
      <button className="flex items-center justify-center p-8 rounded-4 bg-tint-1">
        <AiOutlineUser />
      </button>
    </div>
  );
}

export default Buttons;
