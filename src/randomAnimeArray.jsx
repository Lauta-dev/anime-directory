import { Link } from 'wouter'

const animes = [
  'Berserk',
  'Dragon ball',
  'Naruto',
  'Hunter X Hunter'
]

export function AnimeRandomArray() {
  return (
    <ul>
      {animes.map(anime => (
        <li key={anime}>
          <Link to={`/anime/selected/${anime}`}> Anime sobre {anime} </Link>
        </li>
      ))}

      <li><Link to='/anime/top'> Anime top </Link></li>
      <li><Link to='/'> Inicio </Link></li>
    </ul>
  )
}
