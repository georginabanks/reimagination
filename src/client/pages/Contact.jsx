import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
	return (
			<section className={"contact"}>
				<h1>Contact</h1>
				
				<a href={"https://www.linkedin.com/in/natalie-banks-mcipd-601741a/"}>
					<i className="fa-brands fa-linkedin-in"></i>
				</a>
				
				<ContactForm />
				<br />
			</section>
	)
}