import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from './components/Footer/Footer'
import FoodCard from "./components/common/FoodCard/FoodCard";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Outlet />
      <FoodCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;