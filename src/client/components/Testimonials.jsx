import Carousel from "./Carousel.jsx";

export default function Testimonials({testimonials}) {
	return (
			<section className={"testimonials"}>
				<h2>Testimonials</h2>
				
				<Carousel array={testimonials} />
			</section>
	)
}