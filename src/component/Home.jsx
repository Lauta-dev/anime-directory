import { Link } from 'wouter'
import { useTopAnime } from '../hooks/useTopAnime'
import { AnimeCard } from './TopAnimeCard'

export default function Home() {
  const { topAnime } = useTopAnime()

  return (
    <>
      <Link to='/anime/top'>Top Animes +</Link>
      <AnimeCard animeArray={topAnime} isCharacterAnime={false} />
    </>
  )
}
