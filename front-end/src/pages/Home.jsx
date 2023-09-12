import HeroSlider from "../components/common/heroSlider/HeroSlider"
import SearchBox from "../components/common/searchBox/SearchBox"

function Home() {
  return (
    <div className="flex flex-col gap-5">
      <HeroSlider/>
      <SearchBox/>
    </div>
  )
}

export default Home