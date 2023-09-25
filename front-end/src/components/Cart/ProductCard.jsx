import { AiTwotoneStar } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";

function ProductCard() {
  return (
    <>
      <div className="text-gray-8 border rounded-8 md:h-40 flex">
        <div className="hidden md:flex">
          <img
            src="../src/assets/images/menu/salad.jpg"
            alt="foodImage"
            className="w-full h-full rounded-r-8"
          />
        </div>
        <div className="flex-1 p-3 gap-4 md:gap-0 md:py-4 md:px-7 flex flex-col items-center justify-center">
          <div className="flex items-center justify-between flex-1 w-full">
            <p className="text-caption-lg md:text-h7 font-semibold leading-180">
              پاستا سبزیجات
            </p>
            <button className="text-2xl">
              <MdDeleteOutline />
            </button>
          </div>
          <div className="items-center justify-between flex-1 w-full hidden md:flex">
            <p className="text-body-sm line-clamp-1">
              پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده
            </p>
            <div className="items-center justify-center gap-2">
              <p className="text-base text-gray-5 line-through">۱۷۵٬۰۰۰</p>
              <p className="text-xs rounded-full bg-error-extralight text-error p-1">
                %۲۰
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between flex-1 w-full">
            <div className="flex items-center justify-between flex-1">
              <div className="items-center justify-center text-gold hidden md:flex">
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
              </div>
              <div className="flex items-center justify-center gap-2 bg-tint-1 text-primary font-semibold rounded-4 py-1 px-2">
                <button>+</button>2<button>-</button>
              </div>
            </div>
            <div className="font-semibold leading-180 flex-1 flex items-center justify-end text-caption-lg md:text-base">
              ۱۴۰٬۰۰۰ تومان
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
