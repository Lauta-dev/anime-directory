import { Suspense, lazy } from "react";
import { Route } from "wouter";
import { Routers } from "./Routers/router";
import { Input } from "./component/Input";
import { DesactiveNSFWPovider } from "./context/desactiveNSFW";
import { SelectAnimeOrMangaContextProvider } from "./context/selectAnimeOrManga";
import { Header } from "./component/Header";
import { FiltersContextProvider } from "./context/filtersContext";

const Home = lazy(() => import("./component/Home"));

export default function App() {
	return (
		<Suspense fallback={<h1>Cargando</h1>}>
			<DesactiveNSFWPovider>
				<SelectAnimeOrMangaContextProvider>
					<Header />
					<FiltersContextProvider>
						<Input />
						<Routers />
					</FiltersContextProvider>
					<Route path="/" component={Home} />
				</SelectAnimeOrMangaContextProvider>
			</DesactiveNSFWPovider>
		</Suspense>
	);
}
