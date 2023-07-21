import { CardListOfAnimes } from './CardListOfAnimes'
import { useTopAnime } from '../hooks/useTopAnime'

export default function TopAnimes () {
  const { topAnime } = useTopAnime()
  return <CardListOfAnimes animeArray={topAnime} />
}
