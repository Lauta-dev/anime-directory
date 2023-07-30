import { FORMAT_TYPES, ROUTE } from "../TYPES";

const ova = FORMAT_TYPES.ova.type;
const anime = FORMAT_TYPES.anime.type;
const manga = FORMAT_TYPES.manga.type;
const movie = FORMAT_TYPES.movie.type;
const special = FORMAT_TYPES.special.type;

export const animeSeasonPath = `/${anime}/season`;

export const topAnimePath = `/${anime}/top`;
export const topMangaPath = `/${manga}/top`;

export const topAnimeAndMangaPath = ({ select }) => `/${select}/top/${select}`;

export const animeSearchPath = `/${anime}/search/:title`;
export const mangaSearchPath = `/${manga}/search/:title`;
export const specialSearchPath = `/${special}/search/:title`;
export const ovaSearchPath = `/${ova}/search/:title`;
export const movieSearchPath = `/${movie}/search/:title`;

export const animeWithId = `/${anime}/${ROUTE.id}/:id`;

export const mangaWithId = `/${manga}/${ROUTE.id}/:id`;

export const ovaWithId = `/${ova}/${ROUTE.id}/:id`;
export const specialWithId = `/${special}/${ROUTE.id}/:id`;
export const movieWithId = `/${movie}/${ROUTE.id}/:id`;

export const searchInput = ({ type, anime }) => `/${type}/search/${anime}`;

export const seasonAnimeId = (id) => `${anime}/${ROUTE.id}/${id}`;
