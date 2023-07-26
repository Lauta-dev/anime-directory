import { useInfoAnime } from "../../hooks/infoAnime";
import { Characters } from "./Characters";
import { Image } from "./Image";
import { InfoMangaAndAnime } from "./Information";
import { Status } from "./Status";
import { Synopsis } from "./Synopsis";
import { Titles } from "./Title";

import { FORMAT_TYPES } from "../../TYPES";
import { useAnimeCharacter } from "../../hooks/useAnimeCharacter";
import "../css/animeID.css";
import { SaveMangaOrAnime } from "./saveMangaOrAnime";
import { useEffect } from "react";

export function InfoAnime({ animeInfo, image, titles }) {
	const { infoAnimeFormatter } = useInfoAnime({ data: animeInfo });
	const { getAnimeCharacters } = useAnimeCharacter({
		id: infoAnimeFormatter.id,
		type: FORMAT_TYPES.anime.type,
	});

	useEffect(() => {}, []);

	return (
		<section className="conteiner">
			<Image
				type={animeInfo.type}
				title={animeInfo.title}
				imageURL={image.jpg.largeImageURL}
			/>

			<SaveMangaOrAnime info={infoAnimeFormatter} />

			<section>
				<Titles titles={titles} />
				<InfoMangaAndAnime
					popularity={infoAnimeFormatter.popularity}
					chapters={infoAnimeFormatter.episodes}
					status={infoAnimeFormatter.status}
					score={infoAnimeFormatter.score}
					type={infoAnimeFormatter.type}
				/>
			</section>
			<Synopsis genres={animeInfo.genres} synopsis={animeInfo.synopsis} />
			<Status
				status={infoAnimeFormatter.status}
				aired={infoAnimeFormatter.publishing}
			/>
			<Characters getAnimeCharacters={getAnimeCharacters} />
		</section>
	);
}
