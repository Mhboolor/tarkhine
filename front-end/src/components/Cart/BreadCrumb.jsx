import { AiOutlineShoppingCart } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { IoWalletOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

function BreadCrumb() {
  const { pathname: location } = useLocation();

  console.log(location);

  return (
    <div className="text-h6 leading-180 text-gray-4 flex items-center justify-center gap-2 py-4">
      <p className="flex items-center justify-center gap-1 text-primary">
        <AiOutlineShoppingCart className="text-3xl" />
        سبد خرید
      </p>
      <span
        className={`${
          location === "/cart/complete-info"
            ? "text-primary"
            : location === "/cart/pay"
            ? "text-primary"
            : null
        }`}
      >
        ...................................
      </span>
      <p
        className={`flex items-center justify-center gap-1 ${
          location === "/cart/complete-info"
            ? "text-primary"
            : location === "/cart/pay"
            ? "text-primary"
            : null
        }`}
      >
        <TiTickOutline className="text-3xl" />
        تکمیل اطلاعات
      </p>
      <span className={`${location === "/cart/pay" && "text-primary"}`}>
        ...................................
      </span>
      <p
        className={`flex items-center justify-center gap-1 ${
          location === "/cart/pay" && "text-primary"
        }`}
      >
        <IoWalletOutline className="text-3xl" />
        پرداخت
      </p>
    </div>
  );
}

export default BreadCrumb;
