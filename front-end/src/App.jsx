import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"

function App() {
  return (
    <div className="flex flex-col">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
