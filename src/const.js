import { newObjet } from "./TYPES";

const PREFIX = "https://api.jikan.moe";
const API_VERSION = "v4";
const urlCompleted = `${PREFIX}/${API_VERSION}`;

export const OBTEND_INFO_OF_CHARACTERS = ({ id }) =>
	`${urlCompleted}/characters/${id}`;

export const SEASON_ANIME_NOW = ({ limit, page }) =>
	`${urlCompleted}/seasons/now?limit=${limit}&page=${page}&sfw=true`;

export const JIKAN_API_MANGA = (manga) =>
	`${urlCompleted}/${newObjet.manga}?q=${manga}&sfw`;

export const JIKAN_API_ANIME = (anime) =>
	`${urlCompleted}/${newObjet.anime}?q=${anime}&sfw`;

export const JIKAN_API_ANIME_AND_MANGA_ID = ({ id, type }) =>
	`${urlCompleted}/${type}/${id}/full`;

export const JIKAN_API_CHARACTERS = ({ id, type }) =>
	`${urlCompleted}/${type}/${id}/characters`;

export const JIKAN_API_TOP = ({ type, page, limit }) => {
	const limitInHome = limit ? `&limit=${limit}` : "";

	if (type === "manga")
		return `${urlCompleted}/top/${newObjet.manga}?page=${page}${limitInHome}`;

	const isAnime = type === "anime" ? "tv" : type;
	return `${urlCompleted}/top/${newObjet.anime}?type=${isAnime}&page=${page}${limitInHome}`;
};

export const JIKAN_API_SEARCH = ({
	title,
	type,
	nsfw,
	page = 1,
	status,
	rating,
	genres,
	orderBy,
}) => {
	const isTypeAnime = type === "anime" ? "tv" : type;
	const ifStatusExist = status ? `&status=${status}` : "";
	const ifRatingExist = rating ? `&rating=${rating}` : "";
	const ifGenresExist = genres ? `&genres=${genres}` : "";
	const ifOrderByExist = orderBy ? `&order_by=${orderBy}` : "";

	if (type === "manga") {
		return `${urlCompleted}/manga?q=${title}&sfw=${nsfw}&type=manga&page=${page}`;
	}
	return `${urlCompleted}/anime?q=${title}&sfw=${nsfw}&type=${isTypeAnime}&page=${page}${ifStatusExist}${ifRatingExist}${ifGenresExist}${ifOrderByExist}`;
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
