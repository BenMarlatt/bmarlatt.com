import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import "./index.css";
import HomePage from "./containers/HomePage/index.jsx";
import ErrorPage from "./containers/ErrorPage/index.jsx";
import UnderConstructionPage from "./containers/UnderConstructionPage/index.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectsPage from "./containers/ProjectsPage/index.js";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#282c34", // Dark grey background
    },
    primary: {
      main: "#ffa500", // Orange for primary color
    },
    text: {
      primary: "#ffffff", // White for primary text
      secondary: "#abb2bf", // Light grey for secondary text
    },
  },
  typography: {
    h4: {
      color: "inherit", // Inherits the primary text color
    },
    body1: {
      color: "inherit", // Inherits the primary text color
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
