import { Link } from 'wouter'
import { tipos } from '../const'
import './css/anime_card.css'

export function Animes({ malId, imagen, title, type, score }) {
  const isMangaOrAnime = type == 'TV' ? 'anime' : 'manga'

  return (
    <div className='anime_card'>
      <Link to={`/${isMangaOrAnime}/selected/one/${malId}`}>
        <img className='cover_small' src={imagen} alt={tipos(type, title)} />
        <div className='conteiner_info'>
          <strong>{title}</strong>
          <p>Score: {score}</p>
        </div>
      </Link>
    </div>
  )
}
