import { useSearchMangaOrAnimeRegex } from "../hooks/useSearchMangaOrAnimeRegex";
import { useTop } from "../hooks/useTopAnime";
import CardListOfAnimes from "./CardListOfAnimes";

export default function Top() {
	const { isAnime } = useSearchMangaOrAnimeRegex();

	const { top } = useTop({ type: isAnime });
	const { data, pagination } = top;

	return <CardListOfAnimes pagination={pagination} animeArray={data} />;
}
