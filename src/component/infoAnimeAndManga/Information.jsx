import "../css/slider.css";

export function InfoMangaAndAnime({
	chapters,
	status,
	type,
	score,
	popularity,
}) {
	return (
		<section>
			<ul id="info" className="slider">
        {chapters ? <li>Chapters: {chapters}</li> : null}
				<li>Status: {status}</li>
				<li>Type: {type}</li>
				<li>Score: {score}</li>
				<li>popularity: {popularity}</li>
			</ul>
		</section>
	);
}
