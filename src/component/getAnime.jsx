import { useGetAnime } from "../hooks/getAnime";
import CardListOfAnimes from "./CardListOfAnimes";
import { Loading } from "./Loading";

import "./css/slider.css";

export default function GetAnimes({ params }) {
	const { animeData } = useGetAnime({ params });

	if (animeData === null) return <Loading />;

	const { data, pagination } = animeData;

	return data?.length > 0 ? (
		<CardListOfAnimes pagination={pagination} animeArray={data} />
	) : (
		<h2>No se encontro el anime {params.title}</h2>
	);
}
