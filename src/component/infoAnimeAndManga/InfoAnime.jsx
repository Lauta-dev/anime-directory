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

export function InfoAnime({ animeInfo, image, titles }) {
	const { infoAnimeFormatter } = useInfoAnime({ data: animeInfo });
	const { getAnimeCharacters } = useAnimeCharacter({
		id: infoAnimeFormatter.id,
		type: FORMAT_TYPES.anime,
	});
	return (
		<section className="conteiner">
			<Image
				type={animeInfo.type}
				title={animeInfo.title}
				imageURL={image.jpg.imageURL}
			/>
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
