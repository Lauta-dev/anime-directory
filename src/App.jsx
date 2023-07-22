import { Suspense, lazy } from "react";
import { Route } from "wouter";
import { Routers } from "./Routers/router";
import { Footer } from "./component/Footer";
import { Input } from "./component/Input";
import { Layout } from "./component/Layout";
import { DesactiveNSFWPovider } from "./context/desactiveNSFW";
import { SelectAnimeOrMangaContextProvider } from "./context/selectAnimeOrManga";

const Home = lazy(() => import("./component/Home"));

export default function App() {
	return (
		<SelectAnimeOrMangaContextProvider>
			<DesactiveNSFWPovider>
				<Suspense fallback={<h1>Cargando...</h1>}>
					<Layout>
						<Input />
						<Routers />
						<Route path="/" component={Home} />
						<Footer />
					</Layout>
				</Suspense>
			</DesactiveNSFWPovider>
		</SelectAnimeOrMangaContextProvider>
	);
}
