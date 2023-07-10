import { useGetAnime } from '../hooks/getAnime'
import { ListOfAnimes } from './ListOfAnimes'

import './css/a.css'


export default function GetAnimes({ params }) {
  const { animeData } = useGetAnime({ params })
  return (
    animeData.length < 1 ? <h1>No se encontraron animes</h1> : <ListOfAnimes
      animeArray={animeData}
      nARenderizar={5}
      section={`Anime sobre ${params.anime}`}
    />
  )
}
