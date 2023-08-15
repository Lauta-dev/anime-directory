import { useInfoAnime } from "../../hooks/infoAnime";
import { InfoMangaAndAnime } from "./Information";

import { FORMAT_TYPES } from "../../TYPES";
import { useAnimeCharacter } from "../../hooks/useAnimeCharacter";
import { Info } from "./info";
import "../css/animeID.css";

export default function InfoAnime({ animeInfo, image, titles }) {
	const { info } = useInfoAnime({ data: animeInfo });
	const {
		genres,
		status,
		title,
		type,
		id,
		synopsis,
		episodes,
		popularity,
		score,
	} = info;

	const { getAnimeCharacters } = useAnimeCharacter({
		id,
		type: FORMAT_TYPES.anime.type,
	});

	document.title = title;

	return (
		<section className="conteiner">
			<Info
				image={image}
				caracters={getAnimeCharacters}
				genres={genres}
				title={title}
				titles={titles}
				id={id}
				infoFormatter={info}
				synopsis={synopsis}
				type={type}
			>
				<InfoMangaAndAnime
					episodes={episodes}
					popularity={popularity}
					status={status}
					score={score}
					type={type}
					key={id}
				/>
			</Info>
		</section>
	);
}
