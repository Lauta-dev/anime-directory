import { useEffect, useState } from 'react'
import { JIKAN_API_ANIME_CHARACTERS } from '../const'

/**
 *
 * @param {number} param1.id Id del Anime/Manga
 * @param {string} param2.type Especificar de que medio es: anime o manga
 **/
export function useAnimeCharacter ({ id, type }) {
  const [getAnimeCharacters, setGetAnimesCharacters] = useState([])

  useEffect(() => {
    if (getAnimeCharacters.length > 0) return

    const llamada = setTimeout(() => {
      return fetch(JIKAN_API_ANIME_CHARACTERS({ id, type }))
        .then(res => res.json())
        .then(({ data }) => setGetAnimesCharacters(data))
    }, 2000)

    return () => {
      clearInterval(llamada)
    }
  }, [])

  return { getAnimeCharacters }
}
