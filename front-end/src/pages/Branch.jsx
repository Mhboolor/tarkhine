import HeroSlider from "../components/common/heroSlider/HeroSlider";
import ProductSlider from "../components/Branch/ProductSlider";
import SearchBox from "../components/common/searchBox/SearchBox";
import Button from "../components/common/Button/Button";
import Title from "../components/common/Title/Title"
import CommentsCard from "../components/Branch/Comments/CommentCard";
import CommentsSlider from "../components/Branch/Comments/CommentsSlider";
import { comment } from "postcss";

function Branch() {
  const slider = [
    {
      id: 1,
      title: "طعم بی‌نظیر طبیعت!",
      image: "../src/assets/images/heroSlider/slide-1.jpg",
    },
    {
      id: 2,
      title: "طعم بی‌نظیر طبیعت!",
      image: "../src/assets/images/heroSlider/slide-2.jpg",
    },
    {
      id: 3,
      title: "طعم بی‌نظیر طبیعت!",
      image: "../src/assets/images/heroSlider/slide-3.jpg",
    },
    {
      id: 4,
      title: "طعم بی‌نظیر طبیعت!",
      image: "../src/assets/images/heroSlider/slide-4.jpg",
    },
    {
      id: 5,
      title: "طعم بی‌نظیر طبیعت!",
      image: "../src/assets/images/heroSlider/slide-5.jpg",
    },
  ];
  const products = [
    { id: 1, title: "دلمه برگ کلم", price: "209,000", off: "8", rate: "4.2", image: "../src/assets/images/branch/products/food.jpg" },
    { id: 2, title: "بادمجان شکم‌پر", price: "209,000", off: "8", rate: "4.2", image: "../src/assets/images/branch/products/food.jpg" },
    { id: 3, title: "کالزونه اسفناج", price: "209,000", off: "8", rate: "4.2", image: "../src/assets/images/branch/products/food.jpg" },
    { id: 4, title: "پیتزا قارچ", price: "209,000", off: "8", rate: "4.2", image: "../src/assets/images/branch/products/food.jpg" },
    { id: 5, title: "راتاتویی", price: "209,000", off: "8", rate: "4.2", image: "../src/assets/images/branch/products/food.jpg" },
    { id: 6, title: "پیتزا پپرونی", price: "209,000", off: "8", rate: "4.2", image: "../src/assets/images/branch/products/food.jpg" },
    { id: 7, title: "پنینی اسفناج", price: "209,000", off: "8", rate: "4.2", image: "../src/assets/images/branch/products/food.jpg" },
  ]

  const comments = [
    {
      id: 1,
      name: 'سردار وظیفه',
      date: '۱۴۰۱/۵/۵',
      text: 'از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذا های گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌ های ترخینه واقعا تشکر میکنم.',
      point: '۴',
    },
    {
      id: 2,
      name: 'هانا سبحانی',
      date: '۱۴۰۱/۳/۱۲',
      text: 'از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذا های گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌ های ترخینه واقعا تشکر میکنم.',
      point: '5',
    },
    {
      id: 3,
      name: 'قلمراد ممالکی',
      date: '۱۴۰۱/۶/۱۲',
      text: 'از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذا های گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌ های ترخینه واقعا تشکر میکنم.',
      point: '۳',
    },
    {
      id: 4,
      name: 'برزو خان',
      date: '۱۴۰۱/۱/۵',
      text: 'از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذا های گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌ های ترخینه واقعا تشکر میکنم.',
      point: '۵',
    },
    {
      id: 5,
      name: 'سما نوروزی',
      date: '۱۴۰۱/۱۲/۱۲',
      text: 'از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذا های گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌ های ترخینه واقعا تشکر میکنم.',
      point: '۴',
    },
    {
      id: 6,
      name: 'سالار عقیلی',
      date: '۱۴۰۱/۲/۲۱',
      text: 'از با صفا بودن شعبه اکباتان هر چی بگم کم گفتم. بهترین غذا های گیاهی عمرمو اینجا خوردم. از مدیریت شعبه اکباتان رستوران‌ های ترخینه واقعا تشکر میکنم.',
      point: '۳',
    },
  ]


  return (
    <div className="flex flex-col gap-2">
      <HeroSlider data={slider} />
      <SearchBox />
      <ProductSlider products={products} title={"پیشنهاد ویژه"} />
      <ProductSlider products={products} title={"غذاهای محبوب"} containerBg={"bg-shade-2"} titleColor={"text-white"} />
      <ProductSlider products={products} title={"غذاهای غیر ایرانی"} />
      <div className="flex items-center justify-center">
        <Button text={"مشاهده منوی کامل"} textColor={"primary"} />
      </div>
      <div>
        <Title title={"شعبه اکباتان"} />

      </div>
      <div>
        <Title title={"نظرات کاربران"} />
        <CommentsSlider comments={comments} />
      </div>
    </div>
  );
}

export default Branch;
