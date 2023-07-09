import { useEffect, useState } from 'react'
import { getTopAnime } from '../logic/getTopAnime'
import { ListOfAnimes } from './ListOfAnimes'

export default function TopAnimes({ slice }) {
  const [topAnime, setTopAnime] = useState([])

  useEffect(() => {
    getTopAnime()
      .then(data => setTopAnime(data))
  }, [])

  return slice
    ? <h1>hola</h1>
    : <ListOfAnimes animeArray={topAnime} nARenderizar={4} />
}
