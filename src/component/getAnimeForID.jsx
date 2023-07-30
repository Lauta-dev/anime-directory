import { Order } from "./Order";
import { useGetAnime } from "../hooks/getAnimeForID";

export default function GetAnimeForID({ params }) {
	// Regex que me saca el manga y anime
	const reg = /(manga|anime)/;
	const url = window.location.href;
	const match = url.match(reg);

	const isAnime = match === null ? "anime" : match[0];
	const { animeID } = useGetAnime({ params, type: isAnime });

	if (animeID === null) {
		return <h1>Cargando</h1>;
	}

	if (animeID?.data) {
		return <Order data={animeID.data} />;
	} else {
		const { error } = animeID;
		console.log(error);
	}
}
