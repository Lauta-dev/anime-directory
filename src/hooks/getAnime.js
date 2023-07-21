import { useState, useEffect } from 'react'
import { getAnimeAndManga } from '../logic/getAnime'

export function useGetAnime ({ params }) {
  const { title } = params
  const [animeData, setAnimeData] = useState([])

  useEffect(() => {
    getAnimeAndManga({ input: title, type: 'manga' })
      .then(({ data }) => setAnimeData(data))
  }, [title])

  return { animeData }
}
