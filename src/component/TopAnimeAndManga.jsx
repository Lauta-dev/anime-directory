import { useTopAnime } from "../hooks/useTopAnime";
import { CardListOfAnimes } from "./CardListOfAnimes";

export default function TopAnimes() {
	const { top } = useTopAnime();
	return <CardListOfAnimes animeArray={top} />;
}
