import { CardAnimeAndManga } from "./CardAnimeAndManga";
import { useSearchMangaOrAnimeRegex } from "../hooks/useSearchMangaOrAnimeRegex";
import { useTop } from "../hooks/useTopAnime";

export default function CardListOfAnimes({ pagination, animeArray }) {
	const { isAnime } = useSearchMangaOrAnimeRegex();
	const { top } = useTop({ type: isAnime });

	return (
		<section id="top_anime_conteiner">
			<CardAnimeAndManga animeArray={animeArray} pagination={pagination} />
		</section>
	);
}
