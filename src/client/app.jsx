import {Outlet, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import {useCookies} from "react-cookie";
import Navigation from "./components/Navigation.jsx";
import Footer from "./components/Footer.jsx";
import Page from "./pages/Page.jsx";
import {useEffect, useState} from "react";
import {getPages} from "./api/api.jsx";
import ContactPage from "./pages/Contact.jsx";

export default function App() {

	const [cookies, setCookie, removeCookie] = useCookies(["admin"]);
	const [pages, setPages] = useState({});

	useEffect(() => {
		getPages().then(res => setPages(res));
	}, []);
	

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

	if (pages.homepage) {
		return (
				<Routes>
					<Route path={"/"} element={<Layout/>}>
						<Route path={""} element={<Home page={pages.homepage} pages={pages}/>}/>
						<Route path={"organisational-design"} element={<Page page={pages.organisationalDesign}/>}/>
						<Route path={"individual-team-discovery"}
							   element={<Page page={pages.individualTeamDiscovery}/>}/>
						<Route path={"culture"} element={<Page page={pages.culture}/>}/>
					</Route>
					
					<Route path={"/contact"} element={<ContactPage />}/>
				</Routes>
		)
	}
}
