import { useTop } from "../hooks/useTopAnime";
import { CardListOfAnimes } from "./CardListOfAnimes";

export default function Top() {
	const reg = /(manga|anime)/;
	const url = window.location.href;
	const match = url.match(reg);

	const { top } = useTop({ type: match[0] });
	console.log({ top });

	return <CardListOfAnimes animeArray={top} />;
}
