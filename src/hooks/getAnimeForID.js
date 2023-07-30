import { useState, useEffect } from 'react'
import { JIKAN_API_ANIME_ID } from '../const'

export function useGetAnime ({ params }) {
  const { malId } = params
  const [animeID, setAnimeID] = useState(null)

  useEffect(() => {
    async function getAnimeForID () {
      try {
        const getAnimeForID = await fetch(JIKAN_API_ANIME_ID(malId))
        const data = await getAnimeForID.json()
        setAnimeID(data)
      } catch (error) {
        throw new Error(`Hubo un error al hacer fetching de datos ${error}`)
      }
    }
    getAnimeForID()
  }, [])

  return { animeID }
}
