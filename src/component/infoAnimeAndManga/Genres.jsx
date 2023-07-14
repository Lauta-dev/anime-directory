import { Link } from 'wouter'
import '../css/gender.css'

export function Genres ({ genres }) {
  return (
    <div className='genres_conteiner'>
      <h2>Genres</h2>
      <ul className='lista_description'>
        {genres.map(({ name, mal_id }) => (
          <li className='links' key={mal_id}>
            <Link to={`/anime/category/${name}/${mal_id}`}>
              {`# ${name}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
