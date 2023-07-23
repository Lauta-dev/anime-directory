import { useContext, useEffect, useState } from "react";
import { desactiveNSFWContext } from "../context/desactiveNSFW";
import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import { getAnimeAndManga } from "../logic/getAnime";

export function useGetAnime({ params }) {
	const { type } = useContext(SelectAnimeOrMangaContext);
	const { nsfw } = useContext(desactiveNSFWContext);

	const { title } = params;
	const [animeData, setAnimeData] = useState([]);

	console.log(type);

	useEffect(() => {
		getAnimeAndManga({ input: title, type, nsfw }).then(({ data }) =>
			setAnimeData(data),
		);
	}, [title, nsfw]);

	return { animeData };
}
