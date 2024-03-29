//package imports
import { Navigate, useRoutes } from "react-router-dom";

//module imports
import Homepage from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Book from "./pages/book/book";
import LandingLayout from "./layout/layout";
import About from "./pages/about/about";
import Home from "./pages/homepage/homepage";
import Service from "./pages/service/service";

//router function
const Router = () => {
	return useRoutes([
		{
			path: "/",
			element: <Home/>,
		},
		{
			path: "/landing",
			element: <LandingLayout/>,
			children: [
				{
					path: "/landing/about",
					element: <About/>
				},
				{
					path: "/landing/contact",
					element: <Contact/>
				},
			]
		},
		{
			path: "/book",
			element: <Book/>
		},
		{
			path: "/service",
			element: <Service/>
		},
		
		// {
		// 	path: "*",
		// 	element: <Navigate to="/404" replace/>
		// }
	])
}

export default Router