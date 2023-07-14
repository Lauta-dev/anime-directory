import { useState, useEffect } from 'react'
import { getAnimeForID } from '../logic/getAnimeForID'

export function useGetAnime ({ params }) {
  const { malId } = params
  const [animeID, setAnimeID] = useState(null)

  useEffect(() => {
    getAnimeForID(malId)
      .then(data => {
        return setAnimeID(data.data)
      })
  }, [])

  return { animeID }
}
