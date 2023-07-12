import { useState } from "react";
import SubmitPost from "../api/Submit.jsx";

export default function ContactForm() {
	
	const [content, setContent] = useState({});
	const [button, setButton] = useState("Submit")
	
	const handleChange = (event) => {
		const data = {
			...content,
			[event.target.name]: event.target.value
		};
		
		setContent(data);
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		SubmitPost(content, "Sending...", "Done!", setButton);
	}
	
	return(
			<div className={"contact"}>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="clientName" className="form-label">Name</label>
						<input type="text" className="form-control" name="clientName"
							   placeholder="Jane Doe" onChange={handleChange} />
					</div>
					
					<div className="mb-3">
						<label htmlFor="clientEmail" className="form-label">Email</label>
						<input type="email" className="form-control" name="clientEmail"
							   placeholder="name@example.com" onChange={handleChange} />
					</div>
					
					<div className="mb-3">
						<label htmlFor="clientMessage" className="form-label">Message</label>
						<textarea className="form-control" name="clientMessage" rows="5"
								  onChange={handleChange}></textarea>
					</div>
					
					<button className="button btn btn-dark" style={{backgroundColor: "#385B4F"}} type="submit"
							onSubmit={handleSubmit}>
						{button}
					</button>
				</form>
			</div>
	);
}