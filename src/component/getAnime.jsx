import { useGetAnime } from '../hooks/getAnime'
import { ListOfAnimes } from './ListOfAnimes'

export default function GetAnimes({ params }) {
  const { animeData } = useGetAnime({ params })
  console.log(animeData)

  return (
    animeData.length < 1 ? <h1>No se encontraron animes</h1> : <ListOfAnimes
      animeArray={animeData}
      nARenderizar={5}
      section={`Anime sobre ${params.anime}`}
    />
  )
}
