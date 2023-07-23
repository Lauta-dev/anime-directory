import { useInfoManga } from "../../hooks/infoManga";
import { Image } from "./Image";
import { InfoMangaAndAnime } from "./Information";
import { Status } from "./Status";
import { Synopsis } from "./Synopsis";
import { Titles } from "./Title";

import { FORMAT_TYPES } from "../../TYPES";
import { useAnimeCharacter } from "../../hooks/useAnimeCharacter";
import "../css/animeID.css";
import { Characters } from "./Characters";

export function InfoManga({ infoManga, image, titles }) {
	const { infoMangaFormatter } = useInfoManga({ data: infoManga });
	const { getAnimeCharacters } = useAnimeCharacter({
		id: infoMangaFormatter.id,
		type: FORMAT_TYPES.manga.type,
	});

	return (
		<section className="conteiner">
			<Image
				type={infoManga.type}
				title={infoManga.title}
				imageURL={image.jpg.imageURL}
			/>
			<Titles titles={titles} />
			<InfoMangaAndAnime
				popularity={infoMangaFormatter.popularity}
				chapters={infoMangaFormatter.chapters}
				status={infoMangaFormatter.status}
				score={infoMangaFormatter.score}
				type={infoMangaFormatter.type}
			/>
			<Synopsis genres={infoManga.genres} synopsis={infoManga.synopsis} />
			<Status
				status={infoMangaFormatter.status}
				aired={infoMangaFormatter.publishing}
			/>
			<Characters getAnimeCharacters={getAnimeCharacters} />
		</section>
	);
}
