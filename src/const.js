const PREFIX = "https://api.jikan.moe";
const API_VERSION = "v4";

export const JIKAN_API_MANGA = (manga) =>
	`${PREFIX}/${API_VERSION}/manga?q=${manga}&sfw`;
export const JIKAN_API_ANIME = (anime) =>
	`${PREFIX}/${API_VERSION}/anime?q=${anime}&sfw`;

export const JIKAN_API_ANIME_ID = (id) =>
	`${PREFIX}/${API_VERSION}/anime/${id}`;
export const JIKAN_API_MANGA_ID = (id) =>
	`${PREFIX}/${API_VERSION}/manga/${id}`;

export const JIKAN_API_ANIME_CHARACTERS = ({ id, type }) =>
	`${PREFIX}/${API_VERSION}/${type}/${id}/characters`;

export const JIKAN_API_TOP_ANIME = `${PREFIX}/${API_VERSION}/top/anime`;
export const JIKAN_API_TOP_MANGA = `${PREFIX}/${API_VERSION}/top/manga`;

export const JIKAN_API_ANIME_ADULT_CONTENT = ({ input, type, nsfw }) => {
	console.log(nsfw);
	return `${PREFIX}/${API_VERSION}/${type}?q=${input}&sfw=${nsfw}`;
};

/**
 * @param {string} type En que formato es el elemento
 * @param {string} title Titulo del Anime/Manga
 */
export const tipos = (type, title) => {
	const PREFIX = `cover page not found of this ${type}:`;
	const tiposDeSeries = {
		TV: `${PREFIX} ${title}`,
		OVA: `${PREFIX} ${title}`,
		ONA: `${PREFIX} ${title}`,
		Movie: `${PREFIX} ${title}`,
		Special: `${PREFIX} ${title}`,
	};

	const tiposDeManga = {
		Manga: `${PREFIX} ${title}`,
	};

	if (type === "TV") return tiposDeSeries.TV;
	else if (type === "OVA") return tiposDeSeries.OVA;
	else if (type === "Movie") return tiposDeSeries.Movie;
	else if (type === "Special") return tiposDeSeries.Special;
	else if (type === "ONA") return tiposDeSeries.ONA;
	else if (type === "Manga") return tiposDeManga.Manga;
};
