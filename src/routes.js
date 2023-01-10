//package imports
import { Navigate, useRoutes } from "react-router-dom";

//module imports
import Homepage from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Book from "./pages/book/book";
import LandingLayout from "./layout/layout";

//router function
const Router = () => {
	return useRoutes([
		{
			path: "/",
			element: <Homepage/>
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
			path: "*",
			element: <Navigate to="/404" replace/>
		}
	])
}

export default Router