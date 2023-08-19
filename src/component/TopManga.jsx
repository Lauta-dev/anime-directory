import { useSearchMangaOrAnimeRegex } from "../hooks/useSearchMangaOrAnimeRegex";
import { useTop } from "../hooks/useTopAnime";
import { CardAnimeAndManga } from "./CardAnimeAndManga";

export default function Top() {
	const { isAnime } = useSearchMangaOrAnimeRegex();

	const { top } = useTop({ type: isAnime });
	const { data, pagination } = top;

  return <CardAnimeAndManga pagination={pagination} animeArray={data} />
}
