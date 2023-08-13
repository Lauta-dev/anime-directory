import { formatGlobalInfo } from "../hooks/useAnimeSelected";

import { InfoAnime } from "./infoAnimeAndManga/InfoAnime";
import { InfoManga } from "./infoAnimeAndManga/InfoManga";

export function Order({ data }) {
	const { titles, image } = formatGlobalInfo({ data });
	const isManga = data.source;

	return isManga ? (
		<InfoAnime image={image} animeInfo={data} titles={titles} />
	) : (
		<InfoManga image={image} infoManga={data} titles={titles} />
	);
}
