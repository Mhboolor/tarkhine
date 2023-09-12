import HeroSlider from "../components/common/heroSlider/HeroSlider";
import ProductSlider from "../components/Branch/ProductSlider";
import SearchBox from "../components/common/searchBox/SearchBox";

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

  return (
    <div className="flex flex-col gap-12">
      <HeroSlider data={slider} />
      <SearchBox/>
      <ProductSlider/>
    </div>
  );
}

export default Branch;
