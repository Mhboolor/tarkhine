import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Branch from "../pages/Branch";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Pay from "../components/Cart/Pay/Pay";
import Complete from "../components/Cart/Complete/Complete";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home />},  
      { path: "/branch", element: <Branch /> },
      { path: "/menu", element: <Menu />},
      { path: "/", element: <Home /> },
      { path: "/branch", element: <Branch /> },
      {
        path: "/cart",
        element: <Cart />,
        children: [
          { path: "complete-info", element: <Complete /> },
          { path: "pay", element: <Pay /> },
        ],
      },
    ],
  },
]);
