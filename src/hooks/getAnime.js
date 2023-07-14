import { useState, useEffect } from 'react'
import { getAnime } from '../logic/getAnime'

export function useGetAnime ({ params }) {
  const { title } = params
  const [animeData, setAnimeData] = useState([])

  useEffect(() => {
    getAnime({ input: title, type: 'manga' })
      .then(({ data }) => setAnimeData(data))
  }, [title])

  return { animeData }
}
