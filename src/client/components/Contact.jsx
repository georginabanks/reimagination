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
				
				<div className={"row justify-content-between"}>
					<div className={"col-md-7"}>
						<ContactForm />
					</div>
					
					<div className={"col-md-4 profile align-self-baseline"}>
						<img src={"https://i.postimg.cc/j2KvZsw1/1e4b4604-93ce-4f06-a752-21d8c0cd6b8b.jpg"}
							 alt={"photo of Natalie"} className={"profile-photo"} />
						<h5>Natalie Banks</h5>
					</div>
				</div>
			</section>
	)
}