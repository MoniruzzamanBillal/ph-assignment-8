import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Root from "./Components/Root";
import Details from "./Pages/Details";
import Donation from "./Pages/Donation";
import Statistics from "./Pages/Statistics";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../cardData.json"),
      },
      {
        path: "/detail/:id",
        element: <Details />,
        loader: () => fetch("../cardData.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
        loader: () => fetch("../cardData.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("../cardData.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
