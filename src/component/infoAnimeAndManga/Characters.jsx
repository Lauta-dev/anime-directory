import { Loading } from '../Loading'
import { AnimeCard } from '../TopAnimeCard'

import '../css/loading.css'

export function Characters ({ getAnimeCharacters }) {
  return (
    <>
      <div className='base'>
        <h2>Characters</h2>
        {
        getAnimeCharacters.length
          ? <AnimeCard isCharacterAnime animeArray={getAnimeCharacters} />
          : <Loading />
      }
      </div>

    </>
  )
}
