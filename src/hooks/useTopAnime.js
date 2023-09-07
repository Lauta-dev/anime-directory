import { useContext, useEffect, useState } from "react";
import { JIKAN_API_TOP } from "../const";
import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import { desactiveNSFWContext } from "../context/desactiveNSFW";

export function useTop({ topInHome }) {
	const [top, setTop] = useState([]);

	const { type } = useContext(SelectAnimeOrMangaContext);

	const { nsfw } = useContext(desactiveNSFWContext);
	const { page } = nsfw;

	const local = JSON.parse(localStorage.getItem(type));

	useEffect(() => {
		const getTop = async () => {
			if (local) {
				return setTop(JSON.parse(localStorage.getItem(type)));
			}
			const res = await fetch(JIKAN_API_TOP({ type, page, limit: topInHome }));
			const data = await res.json();

			localStorage.setItem(type, JSON.stringify({ top: data }));
			setTop(data);
		};

		getTop();
	}, [type, page]);

	return { top };
}
