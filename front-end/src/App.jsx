import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main> 
      <Footer />
    </div>
  );
}

export default App;
