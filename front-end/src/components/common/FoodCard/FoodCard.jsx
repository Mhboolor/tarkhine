import Button from "../Button/Button";
import { CiHeart, CiStar } from "react-icons/ci";

const FoodCard = ({ image, price, title, rate }) => {
  return (
    <div className="border-gray-4 border rounded-8 mt-4 bg-white shadow-sm">
      {/* top section */}

      <div className="w-full ">
        <img src={image} alt={title} className="w-full h-full rounded-t-4" />
      </div>

      {/* bottom section */}

      <div className="flex flex-col w-full items-center p-2 md:p-4 gap-1 md:gap-4">
        <p className="text-caption-md md:text-h7 md:font-bold">{title}</p>
        {/* off and like button section */}
        <div className="flex justify-between w-full">
          <div className="flex gap-1 items-center">
            <CiHeart className="w-5 h-5" />
            <span className="text-gray-4 text-caption-sm md:block hidden">
              افزودن به علاقه‌مندی‌ها
            </span>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-caption-sm text-gray-5 line-through">
              ۱۷۵۰۰۰
            </span>
            <span className="bg-error-light flex items-center justify-center bg-opacity-20 text-error w-max text-caption-sm px-1 rounded-8">
              %۲۰
            </span>
          </div>
        </div>
        {/* price and star section */}
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-1">
            <CiStar className="w-5 h-5" />
            <span className="text-xs sm:text-body-sm font-bold">{rate}</span>
            <span className="text-gray-4 text-caption-sm md:block hidden">
              (۵۲ امتیاز)
            </span>
          </div>
          <div className="flex gap-1">
            <span className="text-caption-sm  md:text-body-md">
              {price} تومان
            </span>
          </div>
        </div>
        <div className="w-full">
          <Button
            width="w-full"
            borderColor="none"
            text="افزودن به سبد خرید"
            bgColor="primary"
            textSize="caption-sm md:text-body-md"
            textColor="white"
            py="py-1 md:py-2"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
