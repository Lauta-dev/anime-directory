import { useAnimeSelected } from "../hooks/useAnimeSelected";

import { InfoAnime } from "./infoAnimeAndManga/InfoAnime";
import { InfoManga } from "./infoAnimeAndManga/InfoManga";

export function Order({ data }) {
	const { titles, image } = useAnimeSelected({ data });
	const isManga = data.episodes;

	return !isManga ? (
		<InfoManga image={image} infoManga={data} titles={titles} />
	) : (
		<InfoAnime image={image} animeInfo={data} titles={titles} />
	);
}
