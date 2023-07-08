import { tipos } from '../const'
import { useAnimeSelected } from '../hooks/useAnimeSelected'
import { getGenrenAnime } from '../logic/getGenrenAnime'
import './css/animeID.css'
import { SelecteAnimeSynopsis } from './SelectedAnimeSynopsis'

export function Order({ data }) {
  const { newObj, titles } = useAnimeSelected({ data })
  return (
    <section>
      <div className='cover'>
        <img
          src={newObj.images.jpg.largeImageUrl}
          alt={tipos(newObj.type, newObj.title)}
        />
      </div>
      <section>
        <ul className={getGenrenAnime(newObj.genres)[0]}>
          <li> <h2>Anime titles:</h2> </li>
          {titles.map(({ title, id }) => <li key={id}> {title} </li>)}
        </ul>
        <SelecteAnimeSynopsis
          genres={newObj.genres}
          synopsis={newObj.synopsis}
        />
      </section>
    </section>
  )
}
