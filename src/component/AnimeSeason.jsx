import { getFullSeasonNow } from "../logic/getFullSeasonNow";
import CardListOfAnimes from "./CardListOfAnimes";

export default function AnimeSeason() {
	const { seasonFullNow } = getFullSeasonNow({ limit: 25 });
	const { data, pagination } = seasonFullNow;

	return (
		<>
      <CardListOfAnimes pagination={pagination} animeArray={data} />
		</>
	);
}
