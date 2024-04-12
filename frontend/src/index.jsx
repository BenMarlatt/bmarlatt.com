import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"

import HomePage from "./containers/HomePage/index.jsx"
import ErrorPage from "./containers/ErrorPage/index.jsx"
import UnderConstructionPage from "./containers/UnderConstructionPage/index.jsx"
import BlogPage from "./containers/BlogPage/index.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />
	},
	{
		path: "/404",
		errorElement: <ErrorPage />
	},
	{
		path: "/underconstruction",
		element: <UnderConstructionPage />
	},
	{
		path: "/projects",
		element: <BlogPage />
	}
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
