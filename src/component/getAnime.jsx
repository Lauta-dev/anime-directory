import { useGetAnime } from '../hooks/getAnime'
import { ListOfAnimes } from './ListOfAnimes'
import { Loading } from './Loading'

import './css/a.css'

export default function GetAnimes ({ params }) {
  const { animeData } = useGetAnime({ params })

  return (
    animeData.length < 1
      ? <Loading />
      : <ListOfAnimes
          animeArray={animeData}
          nARenderizar={5}
          section={`Anime sobre ${params.anime}`}
        />
  )
}
