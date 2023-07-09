import { Link } from 'wouter'
import { useEffect, useState } from 'react'
import getCharacter from '../logic/getCharacters'

import './css/a.css'

export function SelecteAnimeSynopsis({ genres, synopsis }) {
  const [hideDescription, setHideDescription] = useState(false)
  const [animes, setAnimes] = useState([])
  const className = hideDescription ? 'con_p_c' : 'con_p'

  useEffect(() => {
    getCharacter(11061)
      .then(({ data }) => {
        setAnimes(data.slice(0, 4))
      })
  }, [])


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

      <div className='slider'>
        {animes && animes.map((data) => {
          const { character } = data
          const { name, images } = character
          const { jpg } = images
          const { image_url } = jpg

          return (
            <>
              <div>
                <img id='img' src={image_url} alt={name} />
                <p>{name}</p>
              </div>
            </>
          )
        })}
      </div>

    </>
  )
}
