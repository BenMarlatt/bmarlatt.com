import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./containers/HomePage/index.jsx";
import ErrorPage from "./containers/ErrorPage/index.jsx";
import UnderConstructionPage from "./containers/UnderConstructionPage/index.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectsPage from "./containers/ProjectsPage/index.js";
const router = createBrowserRouter([
  {
    path: "/404",
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <UnderConstructionPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
