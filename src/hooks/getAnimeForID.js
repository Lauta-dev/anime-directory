import { useState, useEffect } from "react";
import { JIKAN_API_ANIME_AND_MANGA_ID } from "../const";

/**
 * Este devuelve un array [data] si se encuentra el recurso
 * Si no se encontro, devolvera { error, status, message, type }
 *
 * */
export function useGetAnime({ params, type }) {
	const { id } = params;
	const [animeID, setAnimeID] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(false);
		async function getAnimeForID() {
			try {
				const getAnimeForID = await fetch(
					JIKAN_API_ANIME_AND_MANGA_ID({ id, type }),
				);
				const data = await getAnimeForID.json();
				setAnimeID(data);
				setLoading(true);
			} catch (error) {
				throw new Error(`Hubo un error al hacer fetching de datos ${error}`);
			}
		}
		getAnimeForID();
	}, []);

	return { animeID, loading };
}
