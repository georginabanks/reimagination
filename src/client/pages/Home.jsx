import ClientLogos from "../components/ClientLogos.jsx";
import Testimonials from "../components/Testimonials.jsx";
import ContactForm from "../components/ContactForm.jsx";
import FeaturedPages from "../components/FeaturedPages.jsx";

export default function Home({ page, pages }) {
	return (
			<div className={"homepage"}>
				<div className={"img-container"}>
					<img src={page.featured_image} alt={"featured-img"} className={"featured-img"} />
				</div>
				
				<FeaturedPages pages={pages} />
				
				<ClientLogos />
				
				{page.testimonials.length > 0 && <Testimonials testimonials={page.testimonials} />}
				
				<section className={"light row"}>
					<div className={"col-1"}>
					
					</div>
					<div className={"col-10"}>
						<h2>Contact</h2>
					</div>
					<div className={"col-1"}>
						<a href={"https://www.linkedin.com/in/natalie-banks-mcipd-601741a/"} className={"social-links"}>
							<i className="fa-brands fa-linkedin fa-xl"></i>
						</a>
					</div>
					
					<ContactForm />
				</section>
			</div>
	)
}