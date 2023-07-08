import { useEffect, useState } from 'react'
import { getTopAnime } from '../logic/getTopAnime'
import { ListOfAnimes } from './ListOfAnimes'

export function TopAnimes() {
  const [topAnime, setTopAnime] = useState([])

  useEffect(() => {
    getTopAnime()
      .then(data => setTopAnime(data))
  }, [])

  return <ListOfAnimes animeArray={topAnime} nARenderizar={4} />
}
