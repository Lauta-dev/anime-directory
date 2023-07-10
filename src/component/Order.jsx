import { tipos } from '../const'
import { UseAnimeCharacter } from '../hooks/useAnimeCharacter'
import { useAnimeSelected } from '../hooks/useAnimeSelected'
import { getGenrenAnime } from '../logic/getGenrenAnime'
import './css/animeID.css'
import { SelecteAnimeSynopsis } from './SelectedAnimeSynopsis'
import { AnimeCard } from './TopAnimeCard'


export function Order({ data }) {
  const { newObj, titles } = useAnimeSelected({ data })
  const { getAnimeCharacters } = UseAnimeCharacter({ id: newObj.id })
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
        <h2>Characters</h2>
        <AnimeCard isCharacterAnime={true} animeArray={getAnimeCharacters} />
      </section>
    </section>
  )
}
