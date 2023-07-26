import { useTopAnime } from "../hooks/useTopAnime";
import { CardListOfAnimes } from "./CardListOfAnimes";

export default function TopManga({ params }) {
	const objectToArray = Object.values(params);
	const type = objectToArray[0];

	const { top } = useTopAnime({ type });

	return <CardListOfAnimes animeArray={top} />;
}
