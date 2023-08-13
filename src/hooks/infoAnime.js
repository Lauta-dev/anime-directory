import { formatGlobalInfo } from "./useAnimeSelected";

export function useInfoAnime({ data }) {
	const { globalInfo } = formatGlobalInfo({ data });

	const info = {
		...globalInfo,
		source: data.source,
		episodes: data.episodes,
		studios: data.studios, // []
		duration: data.duration,
		rating: data.rating,
	};

	return { info };
}
