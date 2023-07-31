import { useTop } from "../hooks/useTopAnime";
import { CardListOfAnimes } from "./CardListOfAnimes";

export default function Top() {
	const reg = /(manga|anime)/;
	const url = window.location.href;
	const match = url.match(reg);
	const type = match[0];

	const { top } = useTop({ type });

	return <CardListOfAnimes animeArray={top} />;
}
