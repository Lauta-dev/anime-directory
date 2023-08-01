import { useSearchMangaOrAnimeRegex } from "../hooks/useSearchMangaOrAnimeRegex";
import { useTop } from "../hooks/useTopAnime";
import { CardListOfAnimes } from "./CardListOfAnimes";

export default function Top() {
  const { isAnime } = useSearchMangaOrAnimeRegex()

  const { top } = useTop({ type: isAnime });

	return <CardListOfAnimes animeArray={top} />;
}
