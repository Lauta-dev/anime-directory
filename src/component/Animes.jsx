import { Link } from 'wouter'
import './css/anime_card.css'
import { ROUTE } from '../TYPES'
import { Image } from './infoAnimeAndManga/Image'

export function Animes ({ malId, imagen, title, type, score }) {
  return (
    <div className='anime_card'>
      <Link to={`/${type.toLowerCase()}/selected/${ROUTE.id}/${malId}`}>
        <Image type={type} title={title} imageURL={imagen} />
        <div className='conteiner_info'>
          <strong>{title}</strong>
          <p>Score: {score}</p>
        </div>
      </Link>
    </div>
  )
}
