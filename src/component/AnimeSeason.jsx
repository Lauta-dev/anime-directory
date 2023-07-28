import { getFullSeasonNow } from "../logic/getFullSeasonNow";
import { CardListOfAnimes } from "./CardListOfAnimes";

export default function AnimeSeason() {
	const { seasonFullNow } = getFullSeasonNow({ limit: 25, page: 1 });

	const count = seasonFullNow?.pagination?.items?.count;
	const total = seasonFullNow?.pagination?.items?.total;

	const data = seasonFullNow?.data;

	return (
		<>
			{count ? <h2>{`${count}/${total}`}</h2> : <p>Cargando</p>}
			{data?.length ? (
				<CardListOfAnimes animeArray={data} />
			) : (
				<h2>Cargando</h2>
			)}
		</>
	);
}
