const PREFIX = 'https://api.jikan.moe'
const API_VERSION = 'v4'

export const JIKAN_API_MANGA = (manga) => `${PREFIX}/${API_VERSION}/manga?q=${manga}&sfw`
export const JIKAN_API_ANIME = (anime) => `${PREFIX}/${API_VERSION}/anime?q=${anime}&sfw`
export const JIKAN_API_ANIME_ID = (id) => `${PREFIX}/${API_VERSION}/anime/${id}`
export const JIKAN_API_ANIME_CHARACTERS = (id) => `${PREFIX}/${API_VERSION}/anime/${id}/characters`

export const JIKAN_API_TOP_ANIME = `${PREFIX}/${API_VERSION}/top/anime`

export const JIKAN_API_ANIME_ADULT_CONTENT = (anime) => `${PREFIX}/${API_VERSION}/anime?q=${anime}&nsfw`
export const JIKAN_API_MANGA_ADULT_CONTENT = (manga) => `${PREFIX}/${API_VERSION}/manga?q=${manga}&nsfw`

export const tipos = (type, title) => {
  const tiposDeSeries = {
    TV: `No se encontro de la portada de esta serie ${title}`,
    OVA: `No se encontro de la portada de esta OVA ${title}`,
    ONA: `No se encontro de la portada de esta ONA ${title}`,
    Movie: `No se encontro de la portada de esta pelicula ${title}`,
    Special: `No se encontro de la portada de este especial de TV ${title}`,
  }

  if (type === 'TV') return tiposDeSeries.TV
  else if (type === 'OVA') return tiposDeSeries.OVA
  else if (type === 'Movie') return tiposDeSeries.Movie
  else if (type === 'Special') return tiposDeSeries.Special
  else if (type === 'ONA') return tiposDeSeries.ONA
}
