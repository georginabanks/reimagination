import {useState} from "react";


function CreateSlide({props}) {
	const testimonial = props.testimonial.split("\\n");

	return (
			<div key={props.id} className={"carousel-item active"}>
				<div className={"testimonial-text"}>
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
					
					<h6><strong><em>{props.name}</em></strong></h6>
					<p className={"bio-text"}><em>{props.bio}</em></p>
				</div>
			</div>
	)
}


export default function Carousel({array}) {
	
	const [counter, setCounter] = useState(0);
	
	return (
			<div className="carousel carousel-dark slide">
				<div className="carousel-inner">
					<CreateSlide props={array[counter]} />
				</div>
				
				<div className={"lg-screen"}>
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
				
				<div className={"sm-screen"}>
					{counter < array.length && counter > 0 && (
							<a onClick={() => setCounter(counter - 1)}>
								<i className="fa-regular fa-arrow-right"></i>
							</a>
					)}
					
					{counter < array.length - 1 && counter > -1 && (
							<a onClick={() => setCounter(counter + 1)}>
								<i className="fa-regular fa-arrow-left"></i>
							</a>
					)}
				</div>
			</div>
	)
}