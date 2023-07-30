import { Order } from "./Order";
import { useGetAnime } from "../hooks/getAnimeForID";

export default function GetAnimeForID({ params }) {
	const { animeID } = useGetAnime({ params });
  console.log(animeID)

  return animeID?.data ? <Order data={animeID?.data} /> : <p>No existe tal anime</p>;
}
