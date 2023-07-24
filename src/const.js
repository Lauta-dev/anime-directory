const PREFIX = "https://api.jikan.moe";
const API_VERSION = "v4";

const type = {
	manga: "manga",
	anime: "anime",
};

export const JIKAN_API_MANGA = (manga) =>
	`${PREFIX}/${API_VERSION}/${type.manga}?q=${manga}&sfw`;
export const JIKAN_API_ANIME = (anime) =>
	`${PREFIX}/${API_VERSION}/${type.anime}?q=${anime}&sfw`;

export const JIKAN_API_ANIME_ID = (id) =>
	`${PREFIX}/${API_VERSION}/${type.anime}/${id}`;
export const JIKAN_API_MANGA_ID = (id) =>
	`${PREFIX}/${API_VERSION}/${type.manga}/${id}`;

export const JIKAN_API_ANIME_CHARACTERS = ({ id, type }) =>
	`${PREFIX}/${API_VERSION}/${type}/${id}/characters`;

export const JIKAN_API_TOP = ({ type }) =>
	`${PREFIX}/${API_VERSION}/top/${type}`;

/**
 *
 * @param {string} param0 Nombre del medio
 * @param {string} param1 Que tipo de medio es (anime/manga/ova/movie)
 * @param {boolean} param2 Activar el contenido para adultos
 *
 * @returns Una URL para acceder a los animes
 */
export const JIKAN_API_ANIME_SEARCH = ({ title, type, nsfw }) => {
	const isTypeAnime = type === "anime" ? "tv" : type;
	const isAnime = type === "ova" || "movie" || "special" ? "anime" : type;

	console.log({ isAnime, isTypeAnime, type });

	if (type === "manga") {
		return `${PREFIX}/${API_VERSION}/manga?q=${title}&sfw=${nsfw}&type=manga`;
	}

	return `${PREFIX}/${API_VERSION}/anime?q=${title}&sfw=${nsfw}&type=${isTypeAnime}`;
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
