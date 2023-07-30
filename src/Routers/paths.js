import { FORMAT_TYPES, ROUTE } from "../TYPES";

const ova = FORMAT_TYPES.ova.type;
const anime = FORMAT_TYPES.anime.type;
const manga = FORMAT_TYPES.manga.type;
const movie = FORMAT_TYPES.movie.type;
const special = FORMAT_TYPES.special.type;

export const animeSeasonPath = `/${anime}/season`;

export const topAnimePath = `/${anime}/top/:anime`;
export const topMangaPath = `/${manga}/top/:manga`;

export const topAnimeAndMangaPath = ({ select }) => `/${select}/top/${select}`;

export const animeSearchPath = `/${anime}/search/:title`;
export const mangaSearchPath = `/${manga}/search/:title`;
export const specialSearchPath = `/${special}/search/:title`;
export const ovaSearchPath = `/${ova}/search/:title`;
export const movieSearchPath = `/${movie}/search/:title`;

export const animeWithId = `/${anime}/${ROUTE.id}/:malId`;

export const mangaWithId = `/${manga}/${ROUTE.id}/:malId`;

export const ovaWithId = `/${ova}/${ROUTE.id}/:malId`;
export const specialWithId = `/${special}/${ROUTE.id}/:malId`;
export const movieWithId = `/${movie}/${ROUTE.id}/:malId`;

export const searchInput = ({ type, anime }) => `/${type}/search/${anime}`;

export const seasonAnimeId = (id) => `${anime}/${ROUTE.id}/${id}`;
