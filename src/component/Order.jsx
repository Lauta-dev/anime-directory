import { lazy } from "react";
import { formatGlobalInfo } from "../hooks/useAnimeSelected";

const InfoManga = lazy(() => import("./infoAnimeAndManga/InfoManga.jsx"));
const InfoAnime = lazy(() => import("./infoAnimeAndManga/InfoAnime.jsx"));

export function Order({ data }) {
	const { titles, image } = formatGlobalInfo({ data });
	const isManga = data.source;

	return (
		<section>
			{isManga ? (
				<InfoAnime image={image} animeInfo={data} titles={titles} />
			) : (
				<InfoManga image={image} infoManga={data} titles={titles} />
			)}
			;
		</section>
	);
}
