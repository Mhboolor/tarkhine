import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

import { Provider } from "react-redux";
import { store } from "./app/store.js";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
