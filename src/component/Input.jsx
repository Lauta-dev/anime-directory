import { Link } from 'wouter'
import './css/input.css'
import { useState } from 'react'

export function Input() {
  const [anime, setAnime] = useState()

  return (
    <div className='conteiner_search'>
      <input
        className='input_search'
        type='text'
        placeholder='Dragon Ball, Hunter X Hunter, Vinland Saga...'
        onChange={(evet) => setAnime(evet.target.value)}
      />

      <Link to={`/anime/selected/${anime}`} className='btn_search'>Search</Link>

    </div>

  )
}
