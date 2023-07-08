import { useGetAnime } from '../hooks/getAnime'
import { ListOfAnimes } from './ListOfAnimes'

export function GetAnimes({ params }) {
  const { animeData } = useGetAnime({ params })

  return (
    <ListOfAnimes
      animeArray={animeData}
      nARenderizar={5}
      section={`Anime sobre ${params.anime}`}
    />
  )
}
