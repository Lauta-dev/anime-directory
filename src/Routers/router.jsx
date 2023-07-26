import { lazy } from "react";
import { Route } from "wouter";
import { FORMAT_TYPES, ROUTE } from "../TYPES";

const GetMangaForID = lazy(() => import("../component/GetMangaForID"));
const Tops = lazy(() => import("../component/TopManga"));

const GetAnimeForID = lazy(() => import("../component/getAnimeForID"));
const GetAnimes = lazy(() => import("../component/getAnime"));

export function Routers() {
	const anime = FORMAT_TYPES.anime.type;
	const manga = FORMAT_TYPES.manga.type;
	const movie = FORMAT_TYPES.movie.type;
	const ova = FORMAT_TYPES.ova.type;
	const special = FORMAT_TYPES.special.type;
	const doujinshi = FORMAT_TYPES.doujinshi.type;

	return (
		<>
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
