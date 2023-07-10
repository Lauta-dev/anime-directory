import { JIKAN_API_MANGA_ID } from "../const"

/**
 * 
 * @param {number} id 'Este es el id del manga'
 */
export async function getMangaForId({ id }) {
  try {
    const manga = await fetch(JIKAN_API_MANGA_ID(id))
    return manga

  } catch (error) {
    throw new Error('Hubo un error la obtener el Manga mediante la ID')
  }
}