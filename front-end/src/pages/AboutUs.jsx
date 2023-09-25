import HeroBanner from "../components/common/HeroBanner/HeroBanner";
import { AiOutlineUser, AiOutlineLineChart } from "react-icons/ai";
import { RiHomeHeartFill } from "react-icons/ri";
import { PiClipboardText } from "react-icons/pi";

function AboutUs() {
  const data = [
    { text: "پرسنلی مجرب و حرفه‌ای", icon: <AiOutlineUser /> },
    { text: "کیفیت بالای غذا ها", icon: <AiOutlineLineChart /> },
    { text: "محیطی دلنشین و آرام", icon: <RiHomeHeartFill /> },
    { text: "منوی متنوع", icon: <PiClipboardText /> },
  ];

  return (
    <div>
      <div>
        <HeroBanner
          image={"../src/assets/images/other/infobanner.jpg"}
          text={"درباره ترخینه بیشتر بدانید!"}
        />
      </div>
      <div className="container m-auto my-12 p-4">
        <h4 className="mb-14 text-gray-8">درباره‌ما</h4>
        <div className="flex items-start justify-center gap-6 flex-col lg:flex-row">
          <div className="lg:body-xl flex-1 text-gray-7 line-clamp-6 lg:line-clamp-none">
            رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی
            این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در
            تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولیت جلب
            رضایت مشتریان بوده است. دراین خصوص ترخینه همیشه در تلاش بوده تا در
            طی این زمان‌ها کیفیت غذاهای خودرا در بهترین حالت نگه داشته و حتی با
            نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است.
            ترخینه شعبات خود را افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای
            برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با
            کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه
            پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس
            به شما عزیزان می‌باشند. چشم انداز: در آینده‌ای نزدیک تالار پذیرایی
            شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما
            خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
          </div>
          <div className="flex-1 w-full h-[28rem]">
            <img
              src="../src/assets/images/other/infoimage.png"
              alt="Information_Image"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className=" bg-gray-3">
        <div className="container m-auto md:divide-x divide-gray-4 md:divide-x-reverse grid grid-cols-2 md:grid-cols-4 py-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 p-4"
            >
              <span className="text-base md:text-[3rem] text-gray-8">
                {item.icon}
              </span>
              <p className="caption-sm md:body-lg text-gray-7">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
