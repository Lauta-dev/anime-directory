import { ListOfAnimes } from './ListOfAnimes'
import { useTopAnime } from '../hooks/useTopAnime'

export default function TopAnimes () {
  const { topAnime } = useTopAnime()
  return <ListOfAnimes animeArray={topAnime} nARenderizar={4} />
}
