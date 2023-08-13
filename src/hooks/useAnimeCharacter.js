import { useEffect, useState } from "react";
import { JIKAN_API_CHARACTERS } from "../const";

export function useAnimeCharacter({ id, type }) {
	const [getAnimeCharacters, setGetAnimesCharacters] = useState([]);

	useEffect(() => {
		if (getAnimeCharacters.length > 0) return;

    fetch(JIKAN_API_CHARACTERS({ id, type, limit: 6 }))
			.then((res) => res.json())
			.then(({ data }) => setGetAnimesCharacters(data));
	}, []);

	return { getAnimeCharacters };
}
