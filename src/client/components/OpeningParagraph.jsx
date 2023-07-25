export default function OpeningParagraph({ content }) {
	
	const paragraphs = JSON.stringify(content).slice(1, -1).split("\\n");
	
	return (
			<div className={"dark"}>
				<section>
					{paragraphs.length > 0 && paragraphs.map(para => {
						return <p key={paragraphs.indexOf(para)}>{para.slice(0, -1).replace("\\", "")}</p>
					})}
				</section>
			</div>
	)
}