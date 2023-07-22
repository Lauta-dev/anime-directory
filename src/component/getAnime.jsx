import { useGetAnime } from "../hooks/getAnime";
import { CardListOfAnimes } from "./CardListOfAnimes";
import { Loading } from "./Loading";

import "./css/slider.css";

export default function GetAnimes({ params }) {
	const { animeData } = useGetAnime({ params });

	return animeData.length < 1 ? (
		<Loading />
	) : (
		<CardListOfAnimes
			animeArray={animeData}
			nARenderizar={5}
			section={`Anime sobre ${params.anime}`}
		/>
	);
}
