import { lazy } from "react";
import { Route } from "wouter";
import { FORMAT_TYPES, ROUTE } from "../TYPES";

const GetMangaForID = lazy(() => import("../component/GetMangaForID"));
const TopAnimes = lazy(() => import("../component/TopAnimeAndManga"));
const TopManga = lazy(() => import("../component/TopManga"));

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
			<Route path={`/${manga}/top`} component={TopManga} />
			<Route path={`/${manga}/selected/:title`} component={GetAnimes} />

			<Route
				path={`/${manga}/selected/${ROUTE.id}/:malId`}
				component={GetMangaForID}
			/>

			<Route path={`/${anime}/top`} component={TopAnimes} />
			<Route path={`/${anime}/selected/:title`} component={GetAnimes} />
			<Route path={`/${special}/selected/:title`} component={GetAnimes} />
			<Route path={`/${movie}/selected/:title`} component={GetAnimes} />
			<Route path={`/${doujinshi}/selected/:title`} component={GetAnimes} />
			<Route path={`/${ova}/selected/:title`} component={GetAnimes} />
		</>
	);
}
