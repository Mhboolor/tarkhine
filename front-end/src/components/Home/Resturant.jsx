import { FiChevronLeft } from "react-icons/fi";
import { PiNotepad } from "react-icons/pi";
import {
  AiOutlineUser,
  AiOutlineLineChart,
  AiOutlineHome,
} from "react-icons/ai";

function Resturant() {
  return (
    <div
      className=' relative bg-center lg:px-24 bg-cover bg-no-repeat flex flex-col md:flex-row py-12 md:h-96 gap-6 before:contents-[""] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-black/60'
      style={{ backgroundImage: 'url("../src/assets/images/Home/chalos.png")' }}
    >
      <div className="flex flex-col justify-evenly text-white flex-1 gap-4 px-6 z-10">
        <p className="text-base font-bold md:text-2xl">
          رستوران‌های زنجیره‌ای ترخینه
        </p>
        <p className="text-xs md:text-lg leading-6 text-justify">
          مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست
          که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
          رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
          پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان
          شما عزیزان ارائه دهیم.
        </p>
        <a
          href="/"
          className="gap-2 flex items-center justify-center text-sm md:text-base border w-44 self-end border-white rounded-sm"
        >
          اطلاعات بیشتر
          <FiChevronLeft className="hidden md:block text-base" />
        </a>
      </div>
      <div className="grid grid-cols-2 text-white flex-1 z-10">
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <AiOutlineUser className="text-2xl md:text-5xl" />
          <p className=" text-sm md:text-lg text-center">
            پرسنلی مجرب و حرفه‌ای
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <AiOutlineLineChart className="text-2xl md:text-5xl" />
          <p className=" text-sm md:text-lg text-center">کیفیت بالای غذاها</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <AiOutlineHome className="text-2xl md:text-5xl" />
          <p className=" text-sm md:text-lg text-center">محیطی دلنشین و آرام</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          <PiNotepad className="text-2xl md:text-5xl" />
          <p className=" text-sm md:text-lg text-center">منوی متنوع</p>
        </div>
      </div>
    </div>
  );
}

export default Resturant;
