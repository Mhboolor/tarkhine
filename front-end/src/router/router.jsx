import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Branch from "../pages/Branch";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Pay from "../components/Cart/Pay/Pay";
import Complete from "../components/Cart/Complete/Complete";
import ShoppingCart from "../components/Cart/CartContent/ShoppingCart";
import AddBranch from "../pages/AddBranch";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/branch", element: <Branch /> },
      { path: "/add-branch", element: <AddBranch /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/menu", element: <Menu /> },
      { path: "/branch", element: <Branch /> },
      {
        path: "/cart",
        element: <Cart />,
        children: [
          { path: "", element: <ShoppingCart /> },
          { path: "complete-info", element: <Complete /> },
          { path: "pay", element: <Pay /> },
        ],
      },
    ],
  },
]);
