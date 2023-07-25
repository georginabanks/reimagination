import ClientLogos from "../components/ClientLogos.jsx";
import Testimonials from "../components/Testimonials.jsx";
import FeaturedPages from "../components/FeaturedPages.jsx";
import Contact from "../components/Contact.jsx";
import OpeningParagraph from "../components/OpeningParagraph.jsx";

export default function Home({ page, pages }) {
	return (
			<div className={"homepage"}>
				<div className={"img-container"}>
					<img src={page.featured_image} alt={"featured-img"} className={"featured-img"} />
				</div>
				
				<OpeningParagraph content={page.content} />
				
				<FeaturedPages pages={pages} />
				
				<ClientLogos />
				
				{page.testimonials.length > 0 && <Testimonials testimonials={page.testimonials} />}
				
				<Contact header={<h2>Contact</h2>} />
			</div>
	)
}