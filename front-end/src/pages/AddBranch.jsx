import { BsBank, BsBarChartLine } from "react-icons/bs";
import { IoWalletOutline, IoBookOutline } from "react-icons/io5";
import { BiSquare } from "react-icons/bi";
import HeroBanner from "../components/common/HeroBanner/HeroBanner";

function AddBranch() {
  const data = {
    icons: [
      { icon: <BsBank />, text: "بیش از 20 شعبه فعال در سراسر کشور" },
      {
        icon: <IoWalletOutline />,
        text: "تسهیلات راه‌اندازی رستوران و تجهیز آن",
      },
      { icon: <BsBarChartLine />, text: "طرح‌های تشویقی ارتقای فروش" },
      { icon: <IoBookOutline />, text: "اعطای دستورالعمل پخت غذاها" },
    ],
    advantage: [
      "استفاده از برند شناخته شده ترخینه",
      "به حداقل رساندن ریسک سرمایه گذاری",
      "تسریع روند بازگشت سرمایه",
      "مشاوره های تخصصی جهت مدیریت رستوران",
      "مشاوره در امور حقوقی، مالی و مالیاتی",
      "پشتیبانی بازاریابی و منابع انسانی",
      "دریافت مشاوره جهت تامین مواد اولیه و تجهیزات",
      "طرح های تشویقی برای ارتقا فروش",
    ],
  };

  return (
    <div>
      <HeroBanner
        image={"../src/assets/images/other/addBranch.jpeg"}
        text={"همین الان به خانواده بزرگ ترخینه بپیوندید!"}
      />
      <div className="container m-auto flex flex-col my-12 gap-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 pb-12 border-b border-gray-4">
          {data.icons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4"
            >
              <span className="text-primary text-7xl border-[4px] p-4 rounded-x3l">
                {item.icon}
              </span>
              <p className="text-gray-8 text-md text-center">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center pb-12 gap-6 px-4 md:px-0 border-b border-gray-4">
          <h4 className="text-center text-gray-8">مزیت دریافت نمایندگی</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-6">
            {data.advantage.map((item, index) => (
              <div
                key={index}
                className="flex items-center flex-1 text-gray-8 gap-1 text-base md:text-xl"
              >
                <BiSquare className="text-primary rotate-45" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center pb-12 px-4 md:px-0 gap-6 border-b border-gray-4">
          <h4 className="text-center text-gray-8">دریافت مشاوره</h4>
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <input
              type="text"
              placeholder="نام و نام‌خانوادگی"
              className="bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
            />
            <input
              type="number"
              placeholder="شماره تماس"
              className="bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
            />
            <input
              type="text"
              placeholder="زمان ایدئال"
              className="bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
            />
          </div>
          <div>
            <button className="bg-primary text-white rounded-sm py-2 px-4">
              درخواست مشاوره
            </button>
          </div>
        </div>
        <div className="border rounded-md border-gray-4 p-4 flex flex-col gap-6">
          <h4 className="text-center text-gray-8">فرم درخواست نمایندگی</h4>
          <div className="flex flex-col gap-6">
            <h6 className="text-gray-8">مشخصات فردی متقاضی</h6>
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <input
                type="text"
                placeholder="نام و نام‌خانوادگی"
                className="bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
              />
              <input
                type="text"
                placeholder="نام و نام‌خانوادگی"
                className="bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
              />
              <input
                type="text"
                placeholder="نام و نام‌خانوادگی"
                className="bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="text-gray-8">آدرس ملک متقاضی</h6>
            <div className="grid grid-rows-3 grid-cols-1 md:grid-cols-3 gap-6 w-full">
              <input
                type="text"
                placeholder="استان"
                className="bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
              />
              <input
                type="text"
                placeholder="شهر"
                className="bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
              />
              <input
                type="text"
                placeholder="منطقه"
                className="bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
              />

              <textarea
                placeholder="آدرس دقیق"
                className="row-span-3 bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h6 className="text-gray-8">مشخصات ملک متقاضی</h6>
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <input
                type="text"
                placeholder="نوع مالکیت"
                className="bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
              />
              <input
                type="text"
                placeholder="مساحت ملک (متر مربع)"
                className="bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
              />
              <input
                type="text"
                placeholder="سن بنا"
                className="bg-transparent border text-gray-7 border-gray-4 rounded-sm body-sm placeholder:text-gray-7 flex-1 px-2 py-1 focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <h6 className="text-gray-8">امکانات ملک متقاضی</h6>
            <div className="flex flex-col justify-around md:flex-row gap-6 w-full">
              <div className="flex flex-col gap-4 text-gray-7">
                <p>ملک متقاضی:</p>
                <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="parvane"
                      className="cursor-pointer"
                    />
                    <label
                      className="text-base cursor-pointer"
                      htmlFor="parvane"
                    >
                      پروانه کسب دارد .
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="achpazkhone"
                      className="cursor-pointer"
                    />
                    <label
                      className="text-base cursor-pointer"
                      htmlFor="achpazkhone"
                    >
                      آشپزخانه دارد .
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="parking"
                      className="cursor-pointer"
                    />
                    <label
                      className="text-base cursor-pointer"
                      htmlFor="parking"
                    >
                      پارکینگ دارد .
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="anbar"
                      className="cursor-pointer"
                    />
                    <label className="text-base cursor-pointer" htmlFor="anbar">
                      انبار دارد .
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-gray-7">
                <p>تصاویر ملک</p>
                <input type="file" className="" />
              </div>
            </div>
            <div>
              <button className="bg-primary text-white rounded-sm py-2 px-4">
                ثبت اطلاعات
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBranch;
