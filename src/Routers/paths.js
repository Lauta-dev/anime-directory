import { ROUTE, newObjet } from "../TYPES";

export const animeSeasonPath = `/${newObjet.anime}/season`;
export const topPaths = ({ type }) => `/${type}/top`

export const topAnimeAndMangaPath = ({ select }) => `/${select}/top/${select}`;
export const searchPaths = ({ type }) => `/${type}/search/:title`;
export const idPaths = ({ type }) => `/${type}/${ROUTE.id}/:id`;

export const searchInput = ({ type, title }) => `/${type}/search/${title}`;
export const seasonAnimeId = (id) => `${newObjet.anime}/${ROUTE.id}/${id}`;
