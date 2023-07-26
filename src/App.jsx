import { Suspense, lazy } from "react";
import { Route } from "wouter";
import { Routers } from "./Routers/router";
import { Input } from "./component/Input";
import { DesactiveNSFWPovider } from "./context/desactiveNSFW";
import { SelectAnimeOrMangaContextProvider } from "./context/selectAnimeOrManga";

const Home = lazy(() => import("./component/Home"));

export default function App() {
	return (
		<SelectAnimeOrMangaContextProvider>
			<DesactiveNSFWPovider>
				<Suspense fallback={<h1>Cargando...</h1>}>
					<Input />
					<Routers />
					<Route path="/" component={Home} />
				</Suspense>
			</DesactiveNSFWPovider>
		</SelectAnimeOrMangaContextProvider>
	);
}
