import Button from "../common/Button/Button";
import { BsTrash } from "react-icons/bs";
import { PiWarningOctagon } from "react-icons/pi";

const CartSection = ({ products }) => {
  return (
    <div className="w-full flex flex-col text-body-sm p-6 rounded-md border border-gray-4 justify-between h-full divide-y">
      <div
        className="
                justify-between items-center w-full hidden py-4
                md:flex"
      >
        <span className="text-body-md">سبد خرید (۵)</span>
        <BsTrash className="text-h4" />
      </div>
      {products !== undefined && (
        <div className="max-h-[50rem] overflow-auto w-full hidden py-4 md:flex flex-col gap-1">
          <span>محصولات</span>
          <span>محصولات</span>
          <span>محصولات</span>
          <span>محصولات</span>
          <span>محصولات</span>
          <span>محصولات</span>
          <span>محصولات</span>
          <span>محصولات</span>
        </div>
      )}
      <div className="w-full flex justify-between items-center py-4">
        <span>تخفیف محصولات</span>
        <span className="text-gray-6">۶۳۰۰۰ تومان</span>
      </div>

      <div className="w-full flex flex-col gap-2 py-4">
        <div className="flex justify-between">
          <span>هزینه ارسال</span>
          <span>۰ تومان</span>
        </div>
        <div className="text-warning flex items-center gap-3 align-top">
          <PiWarningOctagon className="text-h6 md:text-h4" />
          <span className="text-caption-sm text-start">
            هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما
            محاسبه و به این مبلغ اضافه خواهد شد.
          </span>
        </div>
      </div>

      <div className="w-full flex justify-between py-4">
        <span>مبلغ قابل پرداخت</span>
        <span className="text-primary">۵۴۲,۰۰۰ تومان</span>
      </div>
      <Button
        text="ثبت سفارش"
        bgColor="primary"
        textColor="gray-1"
        width="full"
      />
    </div>
  );
};

export default CartSection;
