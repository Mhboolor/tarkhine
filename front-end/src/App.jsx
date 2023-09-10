import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"
import HeroSlider from "./components/common/heroSlider/HeroSlider"

function App() {
  return (
    <div className="flex flex-col">
      <Header/>
      <HeroSlider/>
      <Outlet/>
    </div>
  )
}

export default App
