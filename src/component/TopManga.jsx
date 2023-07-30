import { useTopAnime } from "../hooks/useTopAnime";
import { CardListOfAnimes } from "./CardListOfAnimes";

export default function TopManga({ params }) {
	const objectToArray = Object.values(params);
	const type = objectToArray[0];

	console.log(params);

	const { top } = useTopAnime({ type });
	console.log({ top });

	return <CardListOfAnimes animeArray={top} />;
}
