const PREFIX = "https://api.jikan.moe";
const API_VERSION = "v4";
const urlCompleted = `${PREFIX}/${API_VERSION}`;

const type = {
	manga: "manga",
	anime: "anime",
};

/**
 * TODO: sfw tiene que cambiar cuando se active el boton de nsfw
 * @param {number} limit Limite de elementos que se mostraran
 * @param {number} page Pagina cual va a viajar
 * @returns
 */
export const SEASON_ANIME_NOW = ({ limit, page }) =>
	`${urlCompleted}/seasons/now?limit=${limit}&page=${page}&sfw=true`;

export const JIKAN_API_MANGA = (manga) =>
	`${urlCompleted}/${type.manga}?q=${manga}&sfw`;
export const JIKAN_API_ANIME = (anime) =>
	`${urlCompleted}/${type.anime}?q=${anime}&sfw`;

export const JIKAN_API_ANIME_AND_MANGA_ID = ({ id, type }) =>
	`${urlCompleted}/${type}/${id}`;

export const JIKAN_API_ANIME_CHARACTERS = ({ id, type }) =>
	`${urlCompleted}/${type}/${id}/characters`;

export const JIKAN_API_TOP = ({ type }) => `${urlCompleted}/top/${type}`;

export const JIKAN_API_SEARCH = ({ title, type, nsfw }) => {
	const isTypeAnime = type === "anime" ? "tv" : type;

	if (type === "manga") {
		return `${urlCompleted}/manga?q=${title}&sfw=${nsfw}&type=manga`;
	}

	return `${urlCompleted}/anime?q=${title}&sfw=${nsfw}&type=${isTypeAnime}`;
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
