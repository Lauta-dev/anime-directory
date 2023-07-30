import { Order } from "./Order";
import { useGetAnime } from "../hooks/getAnimeForID";

export default function GetAnimeForID({ params }) {
	const { animeID } = useGetAnime({ params });
	// Regex que me saca el manga y anime
	const reg = /(manga|anime)/;
	const url = window.location.href;

	console.log(url.match(reg));

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
