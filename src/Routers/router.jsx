import { lazy } from "react";
import { Route } from "wouter";
import { FORMAT_TYPES, ROUTE } from "../TYPES";

const GetMangaForID = lazy(() => import("../component/GetMangaForID.jsx"));
const Tops = lazy(() => import("../component/TopManga.jsx"));

const GetAnimeForID = lazy(() => import("../component/getAnimeForID.jsx"));
const GetAnimes = lazy(() => import("../component/getAnime.jsx"));

const AnimeSeason = lazy(() => import("../component/AnimeSeason.jsx"));

export function Routers() {
	const ova = FORMAT_TYPES.ova.type;
	const anime = FORMAT_TYPES.anime.type;
	const manga = FORMAT_TYPES.manga.type;
	const movie = FORMAT_TYPES.movie.type;
	const special = FORMAT_TYPES.special.type;
	const doujinshi = FORMAT_TYPES.doujinshi.type;

	return (
		<>
			<Route path={`/${anime}/season`} component={AnimeSeason} />

			<Route path={`/${anime}/top/:anime`} component={Tops} />
			<Route path={`/${manga}/top/:manga`} component={Tops} />

			<Route path={`/${manga}/selected/:title`} component={GetAnimes} />

			<Route
				path={`/${manga}/selected/${ROUTE.id}/:malId`}
				component={GetMangaForID}
			/>

			<Route
				path={`/${anime}/selected/${ROUTE.id}/:malId`}
				component={GetAnimeForID}
			/>

			<Route
				path={`/${special}/selected/${ROUTE.id}/:malId`}
				component={GetAnimeForID}
			/>

			<Route
				path={`/${movie}/selected/${ROUTE.id}/:malId`}
				component={GetAnimeForID}
			/>

			<Route
				path={`/${ova}/selected/${ROUTE.id}/:malId`}
				component={GetAnimeForID}
			/>

			<Route path={`/${anime}/selected/:title`} component={GetAnimes} />
			<Route path={`/${special}/selected/:title`} component={GetAnimes} />
			<Route path={`/${movie}/selected/:title`} component={GetAnimes} />
			<Route path={`/${doujinshi}/selected/:title`} component={GetAnimes} />
			<Route path={`/${ova}/selected/:title`} component={GetAnimes} />
		</>
	);
}
