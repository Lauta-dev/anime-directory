import { Link } from 'wouter'
import { useState } from 'react'
import { Genres } from './Genres'

export function Synopsis ({ genres, synopsis }) {
  const [hideDescription, setHideDescription] = useState(false)
  const className = hideDescription ? 'con_p_c' : 'con_p'
  const titleButton = hideDescription ? 'Show less -' : 'Show more +'
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
      >{titleButton}
      </button>
      <Genres genres={genres} />
    </>
  )
}
