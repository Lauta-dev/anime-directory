import { useContext, useEffect, useState } from "react";
import { JIKAN_API_TOP } from "../const";
import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import { desactiveNSFWContext } from "../context/desactiveNSFW";

export function useTop() {
	const [top, setTop] = useState([]);
  
	const { type } = useContext(SelectAnimeOrMangaContext);
	const { nsfw } = useContext(desactiveNSFWContext);
  const { page } = nsfw


	useEffect(() => {
		const getTop = async () => {
			const res = await fetch(JIKAN_API_TOP({ type, page }));
			const data = await res.json();

			setTop(data);
		};

		getTop();
	}, [type, page]);

	return { top };
}
