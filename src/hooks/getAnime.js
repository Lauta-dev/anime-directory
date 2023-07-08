import { useState, useEffect } from 'react'
import { getAnime } from '../logic/getAnime'

export function useGetAnime({ params }) {
  const { anime } = params
  const [animeData, setAnimeData] = useState([])

  useEffect(() => {
    getAnime(anime)
      .then(({ data }) => setAnimeData(data))
  }, [anime])

  return { animeData }
}
