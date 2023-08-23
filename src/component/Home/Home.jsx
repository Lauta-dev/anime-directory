import { lazy } from "react";
import DesactiveNSFWPovider from "../../context/desactiveNSFW";
import { SelectAnimeOrMangaContextProvider } from "../../context/selectAnimeOrManga";

const Tops = lazy(() => import("./Tops"));

export default function Home() {
	return (
		<DesactiveNSFWPovider>
			<SelectAnimeOrMangaContextProvider>
				<Tops />
			</SelectAnimeOrMangaContextProvider>
		</DesactiveNSFWPovider>
	);
}
