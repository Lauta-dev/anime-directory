import { CardAnimeAndManga } from "./CardAnimeAndManga";

export function CardListOfAnimes({ animeArray }) {
	return (
		<section id="top_anime_conteiner">
			<CardAnimeAndManga animeArray={animeArray} />
		</section>
	);
}
