import ClientLogos from "../components/ClientLogos.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Home({ testimonials }) {
	return (
			<div>
				<section>
					<ClientLogos />
				</section>
				
				<Testimonials testimonials={testimonials} />
				
				<section>
					<h1>Contact</h1>
					<ContactForm />
				</section>
			</div>
	)
}