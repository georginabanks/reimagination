import {useState} from "react";


function CreateSlide({props}) {
	const testimonial = props.testimonial.split("\\n");

	return (
			<div key={props.id} className={"carousel-item active"}>
				<section>
					<div className={"quotes"}>
						<i className="fa-solid fa-quote-left"></i>
						&ensp;
						<i className="fa-solid fa-quote-right"></i>
					</div>

					{
						testimonial.map(t => {
							const i = testimonial.indexOf(t);
							return <p key={i}>{t}</p>
						})
					}

					<p><em>{props.name}</em></p>
				</section>
			</div>
	)
}


export default function Carousel({array}) {
	
	const [counter, setCounter] = useState(0);
	
	return (
			<div id="carouselExample" className="carousel carousel-dark slide testimonial">
				<div className="carousel-inner">
					<CreateSlide props={array[counter]} />
				</div>
				
				{counter < array.length && counter > 0 && (
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
								 data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"
								  onClick={() => setCounter(counter - 1)}></span>
							<span className="visually-hidden" onClick={() => setCounter(counter - 1)}>Previous</span>
						</button>
				)}
				
				{counter < array.length - 1 && counter > -1 && (
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
								 data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"
								  onClick={() => setCounter(counter + 1)}></span>
							<span className="visually-hidden" onClick={() => setCounter(counter + 1)}>Next</span>
						</button>
				)}
			</div>
	)
}