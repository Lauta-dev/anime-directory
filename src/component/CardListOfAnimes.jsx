import { CardAnimeAndManga } from "./CardAnimeAndManga";

export default function CardListOfAnimes({ pagination, animeArray }) {
	return (
		<section id="top_anime_conteiner">
			<CardAnimeAndManga animeArray={animeArray} pagination={pagination} />
		</section>
	);
}
