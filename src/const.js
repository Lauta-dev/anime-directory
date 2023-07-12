const PREFIX = 'https://api.jikan.moe'
const API_VERSION = 'v4'

export const JIKAN_API_MANGA = (manga) => `${PREFIX}/${API_VERSION}/manga?q=${manga}&sfw`
export const JIKAN_API_ANIME = (anime) => `${PREFIX}/${API_VERSION}/anime?q=${anime}&sfw`

export const JIKAN_API_ANIME_ID = (id) => `${PREFIX}/${API_VERSION}/anime/${id}`
export const JIKAN_API_MANGA_ID = (id) => `${PREFIX}/${API_VERSION}/manga/${id}`


export const JIKAN_API_ANIME_CHARACTERS = ({ id, type }) => `${PREFIX}/${API_VERSION}/${type}/${id}/characters`

export const JIKAN_API_TOP_ANIME = `${PREFIX}/${API_VERSION}/top/anime`
export const JIKAN_API_TOP_MANGA = `${PREFIX}/${API_VERSION}/top/manga`


export const JIKAN_API_ANIME_ADULT_CONTENT = (anime) => `${PREFIX}/${API_VERSION}/anime?q=${anime}&nsfw`
export const JIKAN_API_MANGA_ADULT_CONTENT = (manga) => `${PREFIX}/${API_VERSION}/manga?q=${manga}&nsfw`

/**
 * 
 * @param {string} type En que formato es el elemento
 * @param {string} title Titulo del Anime/Manga
 */
export const tipos = (type, title) => {
  const PREFIX = 'No se encontro de la portada de'

  const tiposDeSeries = {
    TV: `${PREFIX} esta serie ${title}`,
    OVA: `${PREFIX} esta OVA ${title}`,
    ONA: `${PREFIX} esta ONA ${title}`,
    Movie: `${PREFIX} esta pelicula ${title}`,
    Special: `${PREFIX} este especial de TV ${title}`,
  }

  const tiposDeManga = {
    Manga: `${PREFIX} este Manga ${title}`
  }

  if (type === 'TV') return tiposDeSeries.TV
  else if (type === 'OVA') return tiposDeSeries.OVA
  else if (type === 'Movie') return tiposDeSeries.Movie
  else if (type === 'Special') return tiposDeSeries.Special
  else if (type === 'ONA') return tiposDeSeries.ONA
  else if (type === 'Manga') return tiposDeManga.Manga
}
