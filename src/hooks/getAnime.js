import { useContext, useEffect, useState } from "react";
import { desactiveNSFWContext } from "../context/desactiveNSFW";
import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import { JIKAN_API_SEARCH } from "../const";
import { filtersContext } from "../context/filtersContext";

export function useGetAnime({ title }) {
	const { type } = useContext(SelectAnimeOrMangaContext);
	const { nsfw } = useContext(desactiveNSFWContext);
	const { filtersAll } = useContext(filtersContext);
	const [animeData, setAnimeData] = useState(null);

	const { status, rating, genres, orderBy } = filtersAll;

	useEffect(() => {
		const get = async () => {
			try {
				const getData = await fetch(
					JIKAN_API_SEARCH({
						title,
						type,
						nsfw: nsfw.sfw,
						page: nsfw.page,
						status,
						rating,
						genres,
            orderBy
					}),
				);

				const res = await getData.json();

				return setAnimeData(() => ({
					data: res.data,
					pagination: res.pagination,
				}));
			} catch (error) {
				throw new Error("Error al obtener la respuesta", error);
			}
		};

		get();
	}, [title, nsfw, type, status, rating, genres, orderBy]);

	return { animeData };
}
