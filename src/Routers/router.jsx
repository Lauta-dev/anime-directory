import { lazy } from "react";
import { Route } from "wouter";

import { animeSeasonPath, topPaths, idPaths, searchPaths } from "./paths";
import { newObjet } from "../TYPES";

const Tops = lazy(() => import("../component/TopManga.jsx"));
const GetAnimeForID = lazy(() => import("../component/getAnimeForID.jsx"));
const GetAnimes = lazy(() => import("../component/getAnime.jsx"));
const AnimeSeason = lazy(() => import("../component/AnimeSeason.jsx"));

export function Routers() {
	return (
		<>
			<Route path={animeSeasonPath} component={AnimeSeason} />

      <Route path={topPaths({ type: newObjet.ova })} component={Tops} />
      <Route path={topPaths({ type: newObjet.anime })} component={Tops} />
      <Route path={topPaths({ type: newObjet.manga })} component={Tops} />
      <Route path={topPaths({ type: newObjet.movie })} component={Tops} />
      <Route path={topPaths({ type: newObjet.special })} component={Tops} />

      <Route path={idPaths({ type: newObjet.ova })} component={GetAnimeForID} />
      <Route path={idPaths({ type: newObjet.anime })} component={GetAnimeForID} />
      <Route path={idPaths({ type: newObjet.manga })} component={GetAnimeForID} />
      <Route path={idPaths({ type: newObjet.movie })} component={GetAnimeForID} />
      <Route path={idPaths({ type: newObjet.special })} component={GetAnimeForID} />

      <Route path={searchPaths({ type: newObjet.ova })} component={GetAnimes} />
      <Route path={searchPaths({ type: newObjet.anime })} component={GetAnimes} />
      <Route path={searchPaths({ type: newObjet.manga })} component={GetAnimes} />
      <Route path={searchPaths({ type: newObjet.movie })} component={GetAnimes} />
      <Route path={searchPaths({ type: newObjet.special })} component={GetAnimes} />
		</>
	);
}
