import { useInfoManga } from "../../hooks/infoManga";
import { InfoMangaAndAnime } from "./Information";

import { FORMAT_TYPES } from "../../TYPES";
import { useAnimeCharacter } from "../../hooks/useAnimeCharacter";
import "../css/animeID.css";
import { Info } from "./info";

export default function InfoManga({ infoManga, image, titles }) {
	const { info } = useInfoManga({ data: infoManga });
	const {
		genres,
		title,
		id,
		synopsis,
		popularity,
		chapters,
		status,
		score,
		type,
    relations
	} = info;

	const { getAnimeCharacters } = useAnimeCharacter({
		id,
		type: FORMAT_TYPES.manga.type,
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
        relations={relations}>
				<InfoMangaAndAnime
					popularity={popularity}
					chapters={chapters}
					status={status}
					score={score}
					type={type}
				/>
			</Info>
		</section>
	);
}
