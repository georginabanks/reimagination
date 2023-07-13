import { useState } from "react";
import SubmitPost from "../api/Submit.jsx";

export default function ContactForm() {
	
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
		SubmitPost(content, "Sending...", "Done!", setButton);
	}
	
	return(
			<div className={"row"}>
				<form onSubmit={handleSubmit}>
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
							<input type="email" className="form-control" name="clientEmail" onChange={handleChange} />
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
					
					<div className={"row justify-content-md-end"}>
						<div className={"col-2"}>
							<button className="button btn btn-dark" type="submit"
									onSubmit={handleSubmit}>
								{button}
							</button>
						</div>
					</div>
				</form>
			</div>
	);
}