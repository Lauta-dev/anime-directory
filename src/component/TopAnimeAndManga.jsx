import { useTop } from "../hooks/useTopAnime";
import { CardListOfAnimes } from "./CardListOfAnimes";

export default function TopAnimes() {
	const { top } = useTop();
	return <CardListOfAnimes animeArray={top} />;
}
