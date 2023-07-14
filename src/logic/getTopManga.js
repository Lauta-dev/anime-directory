import { JIKAN_API_TOP_MANGA } from '../const'

export async function getTopManga () {
  try {
    const manga = await fetch(JIKAN_API_TOP_MANGA)
    const res = await manga.json()

    return res.data
  } catch (e) {
    throw new Error('Hubo un error al obtener el top de Mangas')
  }
}
