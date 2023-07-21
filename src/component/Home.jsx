import { Link } from 'wouter'
import { useTopAnime } from '../hooks/useTopAnime'
import { AnimeCard } from './TopAnimeCard'
import { useTopManga } from '../hooks/useTopManga'
import { FORMAT_TYPES } from '../TYPES'

export default function Home () {
  const { topAnime } = useTopAnime()
  const { topManga } = useTopManga()

  return (
    <>
      <Link to={`/${FORMAT_TYPES.anime}/top`}>Top Animes +</Link>
      <AnimeCard animeArray={topAnime} isCharacterAnime={false} />
      <br />
      <Link to={`/${FORMAT_TYPES.manga}/top`}>Top Mangas +</Link>
      <AnimeCard animeArray={topManga} isCharacterAnime={false} />
    </>
  )
}
