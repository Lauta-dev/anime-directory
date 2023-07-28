import { useEffect, useState } from "react";
import { SEASON_ANIME_NOW } from "../const";

export const getSeasonNow = () => {
	const [seasonNow, setSeasonNow] = useState({});
	const season = "season";

	useEffect(() => {
		if (localStorage.getItem(season) !== null) {
			setSeasonNow(JSON.parse(localStorage.getItem(season)));
		}

		const get = async () => {
			try {
				const temp = await fetch(SEASON_ANIME_NOW({ limit: 5 }));
				const res = await temp.json();
				localStorage.setItem(season, JSON.stringify(res));
				return setSeasonNow(res);
			} catch (error) {
				throw new Error(
					"Hubo un error al obtener la temporada actual de anime",
					error,
				);
			}
		};

		get();
	}, []);

	return { seasonNow };
};
