import { useContext, useEffect, useState } from "react";
import { desactiveNSFWContext } from "../context/desactiveNSFW";
import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import { JIKAN_API_SEARCH } from "../const";

export function useGetAnime({ params }) {
	const { type } = useContext(SelectAnimeOrMangaContext);
	const { nsfw } = useContext(desactiveNSFWContext);

	const { title } = params;
	const [animeData, setAnimeData] = useState([]);

	useEffect(() => {
		const get = async () => {
			try {
				const getData = await fetch(JIKAN_API_SEARCH({ title, type, nsfw }));
				const res = await getData.json();
				return setAnimeData(res.data);
			} catch (error) {
				throw new Error("Error al obtener la respuesta");
			}
		};

		get();
	}, [title, nsfw]);

	return { animeData };
}
