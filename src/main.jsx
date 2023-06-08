import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Parametro } from "./pages/Parametro";
import { Querys } from "./pages/Querys";

const Private = ({ children }) => {
  const isLogin = true;
  return isLogin ? children : <Navigate to={"/"} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },

      {
        path: "/contact",
        element: (
          <Private>
            <Contact />
          </Private>
        ),
      },

      {
        path: "/param/:name",
        element: <Parametro />,
      },
      {
        path: "/query",
        element: <Querys />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
