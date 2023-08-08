import { CardAnimeAndManga } from "./CardAnimeAndManga";
import { useSearchMangaOrAnimeRegex } from "../hooks/useSearchMangaOrAnimeRegex";
import { useTop } from "../hooks/useTopAnime";

export default function CardListOfAnimes() {
	const { isAnime } = useSearchMangaOrAnimeRegex();
	const { top } = useTop({ types: isAnime });
	const { data, pagination } = top;

	return (
		<section id="top_anime_conteiner">
			<CardAnimeAndManga animeArray={data} pagination={pagination} />
		</section>
	);
}
