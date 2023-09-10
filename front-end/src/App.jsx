import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
