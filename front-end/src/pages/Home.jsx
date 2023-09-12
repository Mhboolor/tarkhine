import HeroSlider from "../components/common/heroSlider/HeroSlider"
import SearchBox from "../components/common/searchBox/SearchBox"
import TarkhineBranches from "../components/Home/TarkhineBranches/TarkhineBranches"

function Home() {
  return (
    <div className="flex flex-col gap-5">
      <HeroSlider/>
      <SearchBox />
      <TarkhineBranches />
    </div>
  )
}

export default Home