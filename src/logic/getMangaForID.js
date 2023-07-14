import { JIKAN_API_MANGA_ID } from '../const'

/**
 *
 * @param {number} id 'Este es el id del manga'
 */
export async function getMangaForId (id) {
  try {
    const manga = await fetch(JIKAN_API_MANGA_ID(id))
    const res = await manga.json()
    return res.data
  } catch (error) {
    throw new Error('Hubo un error al obtener los Mangas por medio de la id')
  }
}
