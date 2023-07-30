import { Order } from "./Order";
import { useGetAnime } from "../hooks/getAnimeForID";
import { AnimeNotFount } from "./AnimeNotFount";

export default function GetAnimeForID({ params }) {
	const { animeID } = useGetAnime({ params });
	console.log(animeID);

	return animeID?.data ? (
		<Order data={animeID?.data} />
	) : (
		<AnimeNotFount data={animeID} />
	);
}
