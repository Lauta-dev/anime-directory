import { lazy } from "react";
import { Route } from "wouter";
import {
	animeSearchPath,
	animeSeasonPath,
	animeWithId,
	mangaSearchPath,
	mangaWithId,
	movieSearchPath,
	movieWithId,
	ovaSearchPath,
	ovaWithId,
	specialSearchPath,
	specialWithId,
	topAnimePath,
	topMangaPath,
} from "./paths";

const GetMangaForID = lazy(() => import("../component/GetMangaForID.jsx"));
const Tops = lazy(() => import("../component/TopManga.jsx"));

const GetAnimeForID = lazy(() => import("../component/getAnimeForID.jsx"));
const GetAnimes = lazy(() => import("../component/getAnime.jsx"));

const AnimeSeason = lazy(() => import("../component/AnimeSeason.jsx"));

export function Routers() {
	return (
		<>
			<Route path={animeSeasonPath} component={AnimeSeason} />

			<Route path={topAnimePath} component={Tops} />
			<Route path={topMangaPath} component={Tops} />

			<Route path={mangaWithId} component={GetMangaForID} />
			<Route path={animeWithId} component={GetAnimeForID} />

			<Route path={specialWithId} component={GetAnimeForID} />

			<Route path={movieWithId} component={GetAnimeForID} />
			<Route path={ovaWithId} component={GetAnimeForID} />

			<Route path={animeSearchPath} component={GetAnimes} />
			<Route path={mangaSearchPath} component={GetAnimes} />
			<Route path={specialSearchPath} component={GetAnimes} />
			<Route path={movieSearchPath} component={GetAnimes} />
			<Route path={ovaSearchPath} component={GetAnimes} />
		</>
	);
}
