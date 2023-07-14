import { JIKAN_API_ANIME_ID } from '../const'

export async function getAnimeForID (id) {
  try {
    const getAnimeForID = await fetch(JIKAN_API_ANIME_ID(id))
    const data = await getAnimeForID.json()
    return data
  } catch (error) {
    throw new Error(`Hubo un error al hacer fetching de datos ${error}`)
  }
}
