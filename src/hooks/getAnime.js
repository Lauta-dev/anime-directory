import { useContext, useEffect, useState } from "react";
import { desactiveNSFWContext } from "../context/desactiveNSFW";
import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import { getAnimeAndManga } from "../logic/getAnime";

export function useGetAnime({ params }) {
	const { a } = useContext(SelectAnimeOrMangaContext);
	const { nsfw } = useContext(desactiveNSFWContext);

	const { title } = params;
	const [animeData, setAnimeData] = useState([]);

	useEffect(() => {
		getAnimeAndManga({ input: title, type: a, nsfw }).then(({ data }) =>
			setAnimeData(data),
		);
	}, [title, nsfw]);

	return { animeData };
}
