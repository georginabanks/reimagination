import Carousel from "./Carousel.jsx";

export default function Testimonials({testimonials}) {
	return (
			<div>
				<h2>Testimonials</h2>
				
				<Carousel array={testimonials} />
			</div>
	)
}