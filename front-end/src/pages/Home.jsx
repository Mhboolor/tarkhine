import HeroSlider from "../components/common/heroSlider/HeroSlider";
import SearchBox from "../components/common/searchBox/SearchBox";
import Menu from "../components/Home/Menu";
import TarkhineBranches from "../components/Home/TarkhineBranches/TarkhineBranches";

function Home() {
  const slider = [
    {
      id: 1,
      title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
      image: "../src/assets/images/heroSlider/slide-1.jpg",
    },
    {
      id: 2,
      title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
      image: "../src/assets/images/heroSlider/slide-2.jpg",
    },
    {
      id: 3,
      title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
      image: "../src/assets/images/heroSlider/slide-3.jpg",
    },
    {
      id: 4,
      title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
      image: "../src/assets/images/heroSlider/slide-4.jpg",
    },
    {
      id: 5,
      title: "تجربه غذای سالم و گیاهی به سبک ترخینه",
      image: "../src/assets/images/heroSlider/slide-5.jpg",
    },
  ];

  const menu = [
    { button: "غذای اصلی", image: "../src/assets/images/HomeMenuCard/berger.png" },
    { button: "پیش غذا", image: "../src/assets/images/HomeMenuCard/salad.png" },
    { button: "دسر", image: "../src/assets/images/HomeMenuCard/cake.png" },
    { button: "نوشیدنی", image: "../src/assets/images/HomeMenuCard/smoothie.png" },
  ];

  return (
    <div className="flex flex-col gap-5">
      <HeroSlider data={slider} button={"سفارش آنلاین غذا"} />
      <SearchBox px={"4"} lgDisplay={"hidden"} />
      <Menu menu={menu} />
      <TarkhineBranches />
    </div>
  );
}

export default Home;
