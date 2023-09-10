import { MdSearch } from "react-icons/md";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

function Buttons() {
  return (
    <div className="flex items-center justify-center gap-2">
      <button className="items-center justify-center p-8 rounded-4 bg-tint-1 text-primary hidden lg:flex">
        <MdSearch />
      </button>
      <button className="flex items-center justify-center p-8 rounded-4 bg-tint-1 text-primary">
        <AiOutlineShoppingCart />
      </button>
      <button className="flex items-center justify-center p-8 rounded-4 bg-tint-1 text-primary">
        <AiOutlineUser />
      </button>
    </div>
  );
}

export default Buttons;
