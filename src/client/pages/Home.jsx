import ClientLogos from "../components/ClientLogos.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Home({ page }) {
	return (
			<div className={"homepage"}>
				<div className={"img-container"}>
					<img src={page.featured_image} alt={"featured-img"} className={"featured-img"} />
				</div>
				
				<ClientLogos />
				
				{page.testimonials.length > 0 && <Testimonials testimonials={page.testimonials} />}
				
				<section className={"light"}>
					<h2>Contact</h2>
					<ContactForm />
				</section>
			</div>
	)
}