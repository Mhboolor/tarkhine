import HeroBanner from "../components/common/HeroBanner/HeroBanner";
import { CiImageOn } from "react-icons/ci";

function ContactUs() {
  const data = [
    {
      title: "شعبه اکباتان",
      address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
      number: "شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱",
      time: "ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
      image: "../src/assets/images/other/contactekbatan.png",
    },
    {
      title: "شعبه چالوس",
      address:
        "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
      number: "شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱",
      time: "ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
      image: "../src/assets/images/other/contactchalos.png",
    },
    {
      title: "شعبه اقدسیه",
      address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
      number: "شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱",
      time: "ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
      image: "../src/assets/images/other/contactaqdasie.png",
    },
    {
      title: "شعبه ونک",
      address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
      number: "شماره تماس ۱: ۱۲۵۴ ۵۴۸۹ -۰۲۱",
      time: "ساعت کاری: همه‌روزه از ساعت ۱۲ تا ۲۳ بجز روزهای تعطیل",
      image: "../src/assets/images/other/contactvanak.png",
    },
  ];
  return (
    <div>
      <HeroBanner
        image={"../src/assets/images/other/contactbanner.jpeg"}
        text={"با ترخینه در تماس باشید."}
      />
      <div className="container m-auto my-12 px-5 gap-7 flex flex-col">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row group">
            <div className="md:flex-1 h-72 relative">
              <a
                href="/"
                className="hidden group-hover:flex  w-full h-full bg-black/60 absolute items-center justify-center text-5xl text-white before:contents-[''] before:absolute before:bg-white/25 before:w-16 before:h-16 before:rounded-x3l after:contents-[''] after:absolute after:bg-white/10 after:w-20 after:h-20 after:rounded-x3l"
              >
                <CiImageOn />
              </a>
              <img
                src={item.image}
                alt="Branche_Image"
                className="w-full h-full rounded-t-md md:rounded-tl-[0] md:rounded-r-md"
              />
            </div>
            <div className="border border-gray-4 p-4 border-t-0 md:border-r-0 md:border-t rounded-b-md flex flex-col md:rounded-b-[0] md:rounded-l-md md:flex-1 md:items-center md:justify-center md:gap-3">
              <div className="flex flex-col items-center justify-center text-center gap-3 mb-3">
                <p className="text-gray-8 text-lg md:text-xl font-bold">
                  {item.title}
                </p>
                <p className="text-gray-7 text-xs md:text-sm lg:text-lg">
                  {item.address}
                </p>
                <p className="text-gray-7 text-xs md:text-sm lg:text-lg">
                  {item.number}
                </p>
                <p className="text-gray-7 text-xs md:text-sm lg:text-lg">
                  {item.time}
                </p>
              </div>
              <div className="flex gap-4 md:justify-center">
                <button className="text-primary bg-transparent border border-primary rounded-sm py-2 caption-sm flex-1 md:flex-none md:px-4 md:text-base">
                  صفحه شعبه
                </button>
                <button className="flex-1 text-white bg-primary rounded-sm caption-sm md:flex-none md:px-4 md:text-base">
                  دیدن در نقشه
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
