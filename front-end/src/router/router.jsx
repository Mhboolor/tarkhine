import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Branch from "../pages/Branch";
import Menu from "../pages/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home />},  
      { path: "/branch", element: <Branch /> },
      { path: "/menu", element: <Menu />}
    ],
  }
]);
