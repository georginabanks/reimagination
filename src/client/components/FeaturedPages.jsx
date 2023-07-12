export default function FeaturedPages({ pages }) {
	
	function Box({ page, link }) {
		return (
				<a className={"col-md-3 dark page-box gy-3 d-flex align-items-center justify-content-center"}
				   href={link}>
					<h4>{page.page_name}</h4>
				</a>
		)
	}

	return (
			<div className={"light featured-pages"}>
				<div className={"row justify-content-around"}>
					<Box page={pages.organisationalDesign} link={"/organisational-design"} />
					<Box page={pages.individualTeamDiscovery} link={"/individual-team-discovery"} />
					<Box page={pages.culture} link={"/culture"} />
				</div>
			</div>
	)
}