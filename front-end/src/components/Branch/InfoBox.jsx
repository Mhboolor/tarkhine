import { MdLocalAirport, MdPhone, MdWatch } from "react-icons/md";

function InfoBox() {
  return (
    <div className="border-2 border-primary grid grid-cols-2 lg:grid-cols-3 bg-white rounded-8 p-3 lg:py-4 lg:px-12 w-4/5 max-w-[50rem] gap-3 lg:gap-12
     text-gray-8 absolute -bottom-12 lg:-bottom-20 z-10">
      <div className="flex flex-row lg:flex-col items-center justify-center text-center gap-2 text-caption-sm order-2 lg:text-body-md">
        <MdPhone className="text-base lg:text-3xl" />
        <p>۰۲۱-۳۳۵۳۵۳۵۴</p>
        <p className="hidden lg:flex">۰۲۱-۳۳۵۳۵۳۵۶</p>
      </div>
      <div className="flex flex-row lg:flex-col items-center justify-center text-center gap-2 text-caption-sm col-span-2 order-1 lg:order-2 lg:col-span-1 lg:text-body-md">
        <MdLocalAirport className="text-base lg:text-3xl" />
        <p>شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</p>
      </div>
      <div className="flex flex-row lg:flex-col items-center justify-center text-center gap-2 text-caption-sm order-2 lg:text-body-md">
        <MdWatch className="text-base lg:text-3xl" />
        <p>همه‌روزه از ساعت ۱۲ الی ۲۳ </p>
      </div>
    </div>
  );
}

export default InfoBox;
