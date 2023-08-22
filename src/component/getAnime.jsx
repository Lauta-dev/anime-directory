import { useGetAnime } from "../hooks/getAnime";
import { ShowFilters } from "./CardAnimeAndManga";
import CardAnimeAndManga from "./CardAnimeAndManga";

import "./css/slider.css";

export default function GetAnimes({ params }) {
	const { animeData } = useGetAnime({ title: params.title });

	if (animeData === null) return;

	const { data, pagination } = animeData;

	return data?.length > 0 ? (
		<>
			<section id="top_anime_conteiner">
				<CardAnimeAndManga animeArray={data} pagination={pagination} />
			</section>
		</>
	) : (
		<>
			<ShowFilters />
			<h2>No se encontro el anime {params.title}</h2>
			<p>Pruebe cambiando los filtros o buscando otra cosa</p>
			<p>Como por ejemplo: Hunter X Hunter</p>
			<a href="/">Home</a>
		</>
	);
}
