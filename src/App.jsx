import { Suspense, lazy } from "react";

import { Route } from "wouter";
import { Routers } from "./Routers/router";
import { Input } from "./component/Input";
import { SelectAnimeOrMangaContextProvider } from "./context/selectAnimeOrManga";
import { Header } from "./component/header/Header";
import Footer from "./component/footer/Footer";

const Home = lazy(() => import("./component/Home/Home.jsx"));

export default function App() {
	return (
		<Suspense>
			<Header />

			<SelectAnimeOrMangaContextProvider>
				<Input />
			</SelectAnimeOrMangaContextProvider>

			<Routers />
			<Route path="/" component={Home} />
			<Footer />
		</Suspense>
	);
}
