import ContactForm from "./ContactForm.jsx";

export default function Contact({ header, cssStyle }) {
	return (
			<section className={"light contact"} style={cssStyle}>
				<div className={"row align-items-center contact-header"}>
					<div className={"col-1"}></div>
					<div className={"col-10"}>
						{ header }
					</div>
					<div className={"col-1"}>
						<a href={"https://www.linkedin.com/in/natalie-banks-mcipd-601741a/"} className={"social-links"}>
							<i className="fa-brands fa-linkedin fa-xl"></i>
						</a>
					</div>
				</div>
				
				<ContactForm />
			</section>
	)
}