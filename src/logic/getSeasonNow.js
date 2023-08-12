import { useEffect, useState } from "react";
import { SEASON_ANIME_NOW } from "../const";

export const getSeasonNow = () => {
	const [seasonNow, setSeasonNow] = useState(null);

	useEffect(() => {
		const get = async () => {
			try {
				const temp = await fetch(SEASON_ANIME_NOW({ limit: 5, page: 1 }));
				const res = await temp.json();
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
