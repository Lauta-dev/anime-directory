export const JIKAN_API_MANGA = (manga) => `https://api.jikan.moe/v4/manga?q=${manga}&sfw`
export const JIKAN_API_ANIME = (anime) => `https://api.jikan.moe/v4/anime?q=${anime}&sfw`
export const JIKAN_API_ANIME_ID = (id) => `https://api.jikan.moe/v4/anime/${id}`
export const JIKAN_API_ANIME_CHARACTERS = (id) => `https://api.jikan.moe/v4/anime/${id}/characters`

export const JIKAN_API_TOP_ANIME = 'https://api.jikan.moe/v4/top/anime'

export const JIKAN_API_ANIME_ADULT_CONTENT = (anime) => `https://api.jikan.moe/v4/anime?q=${anime}&nsfw`
export const JIKAN_API_MANGA_ADULT_CONTENT = (manga) => `https://api.jikan.moe/v4/manga?q=${manga}&nsfw`

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
