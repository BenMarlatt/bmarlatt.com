import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import styled from "styled-components"
import "./index.css"

import {
	ErrorPage,
	NotFound,
	HomePage,
	BlogPage,
	ProjectPage
} from "./containers"

import Header from "./components/header"
import Footer from "./components/footer"

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			{/* <Footer /> */}
		</>
	)
}

const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <HomePage />
			},
			{
				path: "/projects",
				element: <BlogPage />
			},
			{
				path: "/projects/:id",
				element: <ProjectPage />
			}
		]
	}
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
