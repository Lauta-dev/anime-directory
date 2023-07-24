import { useContext } from "react";
import { JIKAN_API_ANIME_SEARCH } from "../const";
import { desactiveNSFWContext } from "../context/desactiveNSFW";

export async function getAnimeAndManga({ input, type, nsfw }) {
	const { setNsfw } = useContext(desactiveNSFWContext);

	console.log();
}
