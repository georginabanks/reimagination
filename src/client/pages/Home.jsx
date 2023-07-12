import ClientLogos from "../components/ClientLogos.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Home({ page }) {
	return (
			<div>
				<img src={page.featured_image} alt={"featured-img"} className={"featured-img"} />
				
				<ClientLogos />
				
				{page.testimonials.length > 0 && <Testimonials testimonials={page.testimonials} />}
				
				<section className={"light"}>
					<h1>Contact</h1>
					<ContactForm />
				</section>
			</div>
	)
}