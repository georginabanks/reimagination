import Testimonials from "../components/Testimonials.jsx";

export default function Page({ page }) {
	
	const content = JSON.stringify(page.content).slice(1, -1).split("\\n");
	
	return (
			<div>
				<div className={"img-container"}>
					<img src={page.featured_image} alt={"featured-img"} className={"featured-img"} />
					<h1 className={"text-overlay"}>{page.page_name}</h1>
				</div>
				
				<section>
					{ content.map(para => <p>{para.replace("\\", "")}</p>) }
				</section>
				
				{ page.testimonials.length > 0 && <Testimonials testimonials={page.testimonials}/> }
			</div>
	)
}