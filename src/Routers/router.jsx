import { lazy } from "react";
import { Route } from "wouter";
import { FORMAT_TYPES, ROUTE } from "../TYPES";

const GetMangaForID = lazy(() => import("../component/GetMangaForID"));
const TopAnimes = lazy(() => import("../component/TopAnimeAndManga"));
const TopManga = lazy(() => import("../component/TopManga"));

const GetAnimeForID = lazy(() => import("../component/getAnimeForID"));
const GetAnimes = lazy(() => import("../component/getAnime"));

export function Routers() {
	return (
		<>
			<Route path={`/${FORMAT_TYPES.manga}/top`} component={TopManga} />

			<Route
				path={`/${FORMAT_TYPES.manga}/selected/:title`}
				component={GetAnimes}
			/>

			<Route
				path={`/${FORMAT_TYPES.manga}/selected/${ROUTE.id}/:malId`}
				component={GetMangaForID}
			/>

			<Route path={`/${FORMAT_TYPES.anime}/top`} component={TopAnimes} />

			<Route
				path={`/${FORMAT_TYPES.anime}/selected/:title`}
				component={GetAnimes}
			/>

			<Route
				path={`/${FORMAT_TYPES.special}/selected/:title`}
				component={GetAnimes}
			/>

			<Route
				path={`/${FORMAT_TYPES.movie}/selected/:title`}
				component={GetAnimes}
			/>

			<Route
				path={`/${FORMAT_TYPES.doujinshi}/selected/:title`}
				component={GetAnimes}
			/>

			<Route path={`/ova/selected/:title`} component={GetAnimes} />
		</>
	);
}
