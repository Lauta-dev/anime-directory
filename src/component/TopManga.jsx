import { useTopManga } from '../hooks/useTopManga'
import { CardListOfAnimes } from './CardListOfAnimes'

export default function TopManga () {
  const { topManga } = useTopManga()

  return <CardListOfAnimes animeArray={topManga} />
}
