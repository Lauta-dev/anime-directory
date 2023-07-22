import { useTopAnime } from "../hooks/useTopAnime";
import { CardListOfAnimes } from "./CardListOfAnimes";

export default function TopAnimes() {
	const { topAnime } = useTopAnime();
	return <CardListOfAnimes animeArray={topAnime} />;
}
