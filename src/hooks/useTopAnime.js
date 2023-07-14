import { useEffect, useState } from 'react'
import { getTopAnime } from '../logic/getTopAnime'

export function useTopAnime () {
  const [topAnime, setTopAnime] = useState([])

  useEffect(() => {
    getTopAnime().then(({ data }) => setTopAnime(data))
  }, [])

  return { topAnime }
}
