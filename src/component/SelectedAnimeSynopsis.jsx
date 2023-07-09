import { Link } from 'wouter'
import { useState } from 'react'


export function SelecteAnimeSynopsis({ genres, synopsis }) {
  const [hideDescription, setHideDescription] = useState(false)
  const className = hideDescription ? 'con_p_c' : 'con_p'

  return (
    <>
      <div>
        <div className={className}>
          <div className='descri'>
            <h2>Description:</h2>
            <p>{synopsis}</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setHideDescription(!hideDescription)}
        className='buttonShowInfo'
      >Show more
      </button>
      <div className='description_conteiner'>
        <h2>Genres</h2>
        <ul className='lista_description'>
          {genres.map(({ name, mal_id }) => (
            <li className='links' key={mal_id}>
              <Link to={`/anime/category/${name}/${mal_id}`}>
                {`#${name}`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
