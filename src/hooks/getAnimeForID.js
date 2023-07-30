import { useState, useEffect } from "react";
import { JIKAN_API_ANIME_AND_MANGA_ID } from "../const";

export function useGetAnime({ params, type }) {
	const { malId } = params;
	const [animeID, setAnimeID] = useState(null);

	useEffect(() => {
		async function getAnimeForID() {
			try {
				const getAnimeForID = await fetch(
					JIKAN_API_ANIME_AND_MANGA_ID({ id: malId, type }),
				);
				const data = await getAnimeForID.json();
				setAnimeID(data);
			} catch (error) {
				throw new Error(`Hubo un error al hacer fetching de datos ${error}`);
			}
		}
		getAnimeForID();
	}, [malId]);

	return { animeID };
}
