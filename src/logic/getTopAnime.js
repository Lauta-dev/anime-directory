import { JIKAN_API_TOP_ANIME } from '../const'

export async function getTopAnime() {
  try {
    const getData = await fetch(JIKAN_API_TOP_ANIME)

    if (!getData) throw new Error('Error al obtener la respuesta')
    const res = await getData.json()
    return res
  } catch (error) {
    throw new Error('Error al obtener el top de Animes')
  }
}
