import { Link } from 'wouter'
import './css/input.css'
import { useState } from 'react'
import { TYPES } from '../TYPES'

export function Input () {
  const [anime, setAnime] = useState()
  const [check, setCheck] = useState(false)
  return (
    <div className='conteiner_search'>
      <input type='checkbox' name='' value='' onChange={(e) => setCheck(e.target.checked)} />
      <input
        className='input_search'
        type='text'
        placeholder='Dragon Ball, Hunter X Hunter, Vinland Saga...'
        onChange={(evet) => setAnime(evet.target.value)}
      />
      <Link to={`/${check ? TYPES.anime : TYPES.manga}/selected/${anime}`} className='btn_search'>Search</Link>
    </div>

  )
}
