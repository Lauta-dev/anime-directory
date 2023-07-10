import { tipos } from '../const'
import { UseAnimeCharacter } from '../hooks/useAnimeCharacter'
import { useAnimeSelected } from '../hooks/useAnimeSelected'
import { getGenrenAnime } from '../logic/getGenrenAnime'
import './css/animeID.css'
import './css/a.css'
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
        <section id='info' className='slider'>
          <p>Caps: {newObj.episodes}</p>
          <p>Sourse: {newObj.source}</p>
          <p>Type: {newObj.type}</p>
          <p>Score: {newObj.score}</p>
          <p>popularity: {newObj.popularity}</p>
        </section>

        <section>
          <h2>Studio</h2>

          <section id='info' className='slider'>
            {newObj.studios.map((data) => {
              const id = data.mal_id
              const { name } = data

              return <p key={id}>{name}</p>
            })}
          </section>
        </section>

        <SelecteAnimeSynopsis
          genres={newObj.genres}
          synopsis={newObj.synopsis}
        />
        <h2>Characters</h2>
        <AnimeCard isCharacterAnime={true} animeArray={getAnimeCharacters} />

      </section>

      <section id='status'>
        <h2>Status</h2>
        <p>{newObj.status}</p>
        <p>{newObj.aired}</p>
      </section>

    </section>
  )
}
