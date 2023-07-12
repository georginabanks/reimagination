import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import {useCookies} from "react-cookie";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
	
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	
	// Standard Layout
	
	function Layout() {
		return (
				<div>
					<Navigation />
					<Outlet />
					<Footer />
				</div>
		)
	}
	
	return (
			<Routes>
				<Route path={"/"} element={<Layout />} >
					<Route path={""} element={<Home cookies={cookies} />} />
					<Route path={"contact"} element={<Contact />} />
				</Route>
			</Routes>
	)
}