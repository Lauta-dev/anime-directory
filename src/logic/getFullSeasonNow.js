import { useEffect, useState } from "react";
import { SEASON_ANIME_NOW } from "../const";

export const getFullSeasonNow = ({ limit, page }) => {
	const [seasonFullNow, setSeasonFullNow] = useState({});

	useEffect(() => {
		fetch(SEASON_ANIME_NOW({ limit, page }))
			.then((res) => res.json())
			.then((data) => setSeasonFullNow(data))
			.catch((r) => {
				throw new Error(`Error al obtener la temporada de anime ${r}`);
			});
	}, []);

	return { seasonFullNow };
};
