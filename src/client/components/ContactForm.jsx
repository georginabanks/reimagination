import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
	
	const form = useRef();
	
	const [content, setContent] = useState({});
	const [button, setButton] = useState("Submit")
	
	let rows = "5";
	if (window.screen.height < 600) { rows = "4" }
	
	const handleChange = (event) => {
		const data = {
			...content,
			[event.target.name]: event.target.value
		};
		
		setContent(data);
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		setButton("Sending...")
		
		emailjs.sendForm('service_3sqq54p', 'template_s5vnz5d', form.current, 'LpZBvIHaKa3icIkGq')
		.then(function(response) {
		   console.log('SUCCESS!', response.status, response.text);
		   setButton("Sent!");
		}, function(error) {
		   console.log('FAILED...', error);
		})
	}
	
	return(
			<div className={"row"}>
				<form ref={form} onSubmit={handleSubmit}>
					<div className="mb-3 row">
						<div className={"col-md-3"}>
							<label htmlFor="clientName" className="form-label">Name</label>
						</div>
						<div className={"col-md-9"}>
							<input type="text" className="form-control" name="clientName" onChange={handleChange} />
						</div>
					</div>
					
					<div className="mb-3 row">
						<div className={"col-md-3"}>
							<label htmlFor="clientEmail" className="form-label">Email</label>
						</div>
						<div className={"col-md-9"}>
							<input type="text" className="form-control" name="clientEmail" onChange={handleChange} />
						</div>
					</div>
					
					<div className="mb-3 row">
						<div className={"col-md-3"}>
							<label htmlFor="clientMessage" className="form-label">Message</label>
						</div>
						<div className={"col-md-9"}>
							<textarea className="form-control" name="clientMessage" rows={rows} onChange={handleChange}
									  style={{ backgroundColor: "#D7EDDA", border: "2px solid #385B4F",
										  borderRadius: "1.5rem" }}></textarea>
						</div>
					</div>
					
					<div className={"position-relative"}>
						<button className="button btn btn-dark position-absolute end-0"
								type="submit" onSubmit={handleSubmit}>
							{button}
						</button>
					</div>
				</form>
			</div>
	);
}