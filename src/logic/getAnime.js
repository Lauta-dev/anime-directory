import { JIKAN_API_ANIME_ADULT_CONTENT } from '../const'

export async function getAnimeAndManga({ input, type }) {
  try {
    const getData = await fetch(JIKAN_API_ANIME_ADULT_CONTENT({ input, type }))
    return await getData.json()
  } catch (error) {
    throw new Error('Error al obtener la respuesta')
  }
}
