import { Order } from "./Order";
import { useGetAnime } from "../hooks/getAnimeForID";

export default function GetAnimeForID({ params }) {
	const { animeID } = useGetAnime({ params });
	return animeID ? <Order data={animeID} /> : <p>No existe tal anime</p>;
}
