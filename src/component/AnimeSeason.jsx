import { getFullSeasonNow } from "../logic/getFullSeasonNow";
import CardAnimeAndManga from "./CardAnimeAndManga";

export default function AnimeSeason() {
	const { seasonFullNow } = getFullSeasonNow({ limit: 25 });
	const { data, pagination } = seasonFullNow;

	return (
		<>
			<CardAnimeAndManga animeArray={data} pagination={pagination} />
		</>
	);
}
