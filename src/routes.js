//package imports
import { Navigate, useRoutes } from "react-router-dom";

//module imports
import Homepage from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Book from "./pages/book/book";

//router function
const Router = () => {
	return useRoutes([
		{
			path: "/",
			element: <Homepage/>
		},
		{
			path: "/about",
			element: <About/>
		},
		{
			path: "/contact",
			element: <Contact/>
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