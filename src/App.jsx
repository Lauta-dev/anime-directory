import { Suspense, lazy } from "react";
import { Route } from "wouter";
import { Routers } from "./Routers/router";
import { Input } from "./component/Input";
import { DesactiveNSFWPovider } from "./context/desactiveNSFW";
import { SelectAnimeOrMangaContextProvider } from "./context/selectAnimeOrManga";

const Home = lazy(() => import("./component/Home"));

export default function App() {
	return (
		<Suspense fallback={<h1></h1>}>
			<DesactiveNSFWPovider>
				<SelectAnimeOrMangaContextProvider>
					<Input />
					<Routers />
					<Route path="/" component={Home} />
				</SelectAnimeOrMangaContextProvider>
			</DesactiveNSFWPovider>
		</Suspense>
	);
}
