import HeroSlider from "../components/common/heroSlider/HeroSlider"
import SearchBox from "../components/common/searchBox/SearchBox"
import TarkhineBranches from "../components/Home/TarkhineBranches/TarkhineBranches"

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

  return (
    <div className="flex flex-col gap-5">
      <HeroSlider data={slider} button={"سفارش آنلاین غذا"}/>
      <SearchBox px={'4'} lgDisplay={"hidden"} />
      <TarkhineBranches />
    </div>
  )
}

export default Home