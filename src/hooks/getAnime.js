import { useContext, useEffect, useState } from "react";
import { desactiveNSFWContext } from "../context/desactiveNSFW";
import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import { JIKAN_API_SEARCH } from "../const";

export function useGetAnime({ params }) {
	const { type } = useContext(SelectAnimeOrMangaContext);
	const { nsfw } = useContext(desactiveNSFWContext);
	const [animeData, setAnimeData] = useState(null);

	const { title } = params;

	useEffect(() => {
		const get = async () => {
			try {
				const getData = await fetch(
					JIKAN_API_SEARCH({
						title,
						type,
						nsfw: nsfw.sfw,
						page: nsfw.page,
					}),
				);

				const res = await getData.json();

				return setAnimeData((prev) => ({
					data: res.data,
					pagination: res.pagination,
					prev,
				}));
			} catch (error) {
				throw new Error("Error al obtener la respuesta", error);
			}
		};

		get();
	}, [title, nsfw, type]);

	console.log(animeData);

	return { animeData };
}
