import HeroSlider from "../components/common/heroSlider/HeroSlider";
import ProductSlider from "../components/Branch/ProductSlider";
import SearchBox from "../components/common/searchBox/SearchBox";
import Button from "../components/common/Button/Button";
import Title from "../components/common/Title/Title"

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
    {id : 1 , title : "دلمه برگ کلم" , price : "209,000" , off : "8" , rate : "4.2" , image : "../src/assets/images/branch/products/food.jpg"},
    {id : 2 , title : "بادمجان شکم‌پر" , price : "209,000" , off : "8" , rate : "4.2" , image : "../src/assets/images/branch/products/food.jpg"},
    {id : 3 , title : "کالزونه اسفناج" , price : "209,000" , off : "8" , rate : "4.2" , image : "../src/assets/images/branch/products/food.jpg"},
    {id : 4 , title : "پیتزا قارچ" , price : "209,000" , off : "8" , rate : "4.2" , image : "../src/assets/images/branch/products/food.jpg"},
    {id : 5 , title : "راتاتویی" , price : "209,000" , off : "8" , rate : "4.2" , image : "../src/assets/images/branch/products/food.jpg"},
    {id : 6 , title : "پیتزا پپرونی" , price : "209,000" , off : "8" , rate : "4.2" , image : "../src/assets/images/branch/products/food.jpg"},
    {id : 7 , title : "پنینی اسفناج" , price : "209,000" , off : "8" , rate : "4.2" , image : "../src/assets/images/branch/products/food.jpg"},
  ]

  return (
    <div className="flex flex-col gap-2">
      <HeroSlider data={slider} />
      <SearchBox/>
      <ProductSlider products={products} title={"پیشنهاد ویژه"}/>
      <ProductSlider products={products} title={"غذاهای محبوب"} containerBg={"bg-shade-2"} titleColor={"text-white"}/>
      <ProductSlider products={products} title={"غذاهای غیر ایرانی"}/>
      <div className="flex items-center justify-center">
        <Button text={"مشاهده منوی کامل"} textColor={"primary"}/>
      </div>
      <div>
        <Title title={"شعبه اکباتان"}/>
        
      </div>
      <div>
      <Title title={"نظرات کاربران"}/>
      </div>
    </div>
  );
}

export default Branch;
