import { CardAnimeAndManga } from "./CardAnimeAndManga";

export function CardListOfAnimes({ animeArray, pagination }) {
	return (
		<section id="top_anime_conteiner">
			<CardAnimeAndManga
        animeArray={animeArray}
        pagination={pagination}
      />
		</section>
	);
}
