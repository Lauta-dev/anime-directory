import { Link } from 'wouter'
import './css/input.css'
import { useState } from 'react'

export function Input () {
  const [anime, setAnime] = useState()
  const [type, setType] = useState('')

  return (
    <div className='conteiner_search'>
      <label htmlFor='pet-select'>Category</label>
      <select id='pet-select' onChange={(e) => setType(e.target.value)}>
        <option value='tv'>Anime</option>
        <option value='manga'>Manga</option>
        <option value='hentai'>Hentar +18</option>
      </select>

      <input
        className='input_search'
        type='text'
        placeholder='Dragon Ball, Hunter X Hunter, Vinland Saga...'
        onChange={(evet) => setAnime(evet.target.value)}
      />
      <Link to={`/${type}/selected/${anime}`} className='btn_search'>Search</Link>
    </div>

  )
}
