import { Link } from 'wouter'
import { tipos } from '../const'
import './css/anime_card.css'

export function Animes({ malId, imagen, title, type, score, genres }) {
  return (
    <div className='anime_card'>
      <Link to={`/anime/selected/one/${malId}`}>
        <img className='cover_small' src={imagen} alt={tipos(type, title)} />
        <div className='conteiner_info'>
          <strong>{title}</strong>
          <p>Score: {score}</p>
          <div>
            {genres.map(({ name, mal_id }) => <p key={mal_id}>{name},</p>)}
          </div>
        </div>
      </Link>
    </div>
  )
}
