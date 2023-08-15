import Contact from "../components/Contact.jsx";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

export default function ContactPage() {
	return (
			<div id={"contact"}>
				<Navigation />
				<Contact header={<h1>Contact</h1>} cssStyle={{minHeight: "calc(100vh - 3.2rem)"}}/>
				<Footer />
			</div>
	)
}