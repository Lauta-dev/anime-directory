import { Suspense, lazy } from "react";

import { Route } from "wouter";
import { Routers } from "./Routers/router";
import { Input } from "./component/Input";
import { DesactiveNSFWPovider } from "./context/desactiveNSFW";
import { SelectAnimeOrMangaContextProvider } from "./context/selectAnimeOrManga";
import { Header } from "./component/Header";
import { FiltersContextProvider } from "./context/filtersContext";
import "../node_modules/lite-youtube-embed/src/lite-yt-embed.js";

const Home = lazy(() => import("./component/Home.jsx"));

export default function App() {
	return (
		<DesactiveNSFWPovider>
			<SelectAnimeOrMangaContextProvider>
				<Header />
				<FiltersContextProvider>
					<Input />
					<Routers />
				</FiltersContextProvider>
				<Suspense>
					<Route path="/" component={Home} />
				</Suspense>
			</SelectAnimeOrMangaContextProvider>
		</DesactiveNSFWPovider>
	);
}
