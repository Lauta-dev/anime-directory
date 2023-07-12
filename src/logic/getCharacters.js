import { JIKAN_API_ANIME_CHARACTERS } from "../const";

export default async function getCharacter(malId) {
  try {
    const feching = await fetch(JIKAN_API_ANIME_CHARACTERS({ id: malId, type: 'manga' }))
    const data = await feching.json()
    return data
  } catch (error) {
    throw new Error('Error al obtener los personajes')
  }
}
