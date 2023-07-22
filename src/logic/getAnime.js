import { JIKAN_API_ANIME_ADULT_CONTENT } from "../const";

export async function getAnimeAndManga({ input, type, nsfw }) {
	try {
		const getData = await fetch(
			JIKAN_API_ANIME_ADULT_CONTENT({ input, type, nsfw }),
		);
		return await getData.json();
	} catch (error) {
		throw new Error("Error al obtener la respuesta");
	}
}
