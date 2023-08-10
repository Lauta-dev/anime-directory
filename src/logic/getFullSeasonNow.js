import { useContext, useEffect, useState } from "react";
import { SEASON_ANIME_NOW } from "../const";
import { desactiveNSFWContext } from "../context/desactiveNSFW";

export const getFullSeasonNow = ({ limit }) => {
	const [seasonFullNow, setSeasonFullNow] = useState({});
	const { nsfw } = useContext(desactiveNSFWContext);

	const page = nsfw.page;

	useEffect(() => {
		fetch(SEASON_ANIME_NOW({ limit, page }))
			.then((res) => res.json())
			.then((data) => setSeasonFullNow(data))
			.catch((r) => {
				throw new Error(`Error al obtener la temporada de anime ${r}`);
			});
	}, [nsfw]);

	return { seasonFullNow };
};
