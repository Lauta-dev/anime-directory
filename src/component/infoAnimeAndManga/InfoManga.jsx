import { useInfoManga } from '../../hooks/infoManga'
import { Image } from './Image'
import { InfoMangaAndAnime } from './Information'
import { Status } from './Status'
import { Titles } from './Title'
import { Synopsis } from './Synopsis'

import '../css/animeID.css'
import { useAnimeCharacter } from '../../hooks/useAnimeCharacter'
import { Characters } from './Characters'
import { TYPES } from '../../TYPES'

export function InfoManga ({ infoManga, image, titles }) {
  const { infoMangaFormatter } = useInfoManga({ data: infoManga })
  const { getAnimeCharacters } = useAnimeCharacter({ id: infoMangaFormatter.id, type: TYPES.manga })

  return (
    <section className='conteiner'>
      <Image type={infoManga.type} title={infoManga.title} imageURL={image.jpg.imageURL} />
      <Titles titles={titles} />
      <InfoMangaAndAnime
        popularity={infoMangaFormatter.popularity}
        chapters={infoMangaFormatter.chapters}
        status={infoMangaFormatter.status}
        score={infoMangaFormatter.score}
        type={infoMangaFormatter.type}
      />
      <Synopsis
        genres={infoManga.genres}
        synopsis={infoManga.synopsis}
      />
      <Status
        status={infoMangaFormatter.status}
        aired={infoMangaFormatter.publishing}
      />
      <Characters getAnimeCharacters={getAnimeCharacters} />
    </section>
  )
}
