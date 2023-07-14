import { useInfoAnime } from '../../hooks/infoAnime'
import { Image } from './Image'
import { InfoMangaAndAnime } from './Information'
import { Status } from './Status'
import { Titles } from './Title'
import { Characters } from './Characters'
import { Synopsis } from './Synopsis'

import '../css/animeID.css'
import { useAnimeCharacter } from '../../hooks/useAnimeCharacter'
import { TYPES } from '../../TYPES'

export function InfoAnime ({ animeInfo, image, titles }) {
  const { infoAnimeFormatter } = useInfoAnime({ data: animeInfo })
  const { getAnimeCharacters } = useAnimeCharacter({ id: infoAnimeFormatter.id, type: TYPES.anime })
  return (
    <section>
      <Image type={animeInfo.type} title={animeInfo.title} imageURL={image.jpg.imageURL} />
      <section>
        <Titles titles={titles} />
        <InfoMangaAndAnime
          popularity={infoAnimeFormatter.popularity}
          chapters={infoAnimeFormatter.chapters}
          status={infoAnimeFormatter.status}
          score={infoAnimeFormatter.score}
          type={infoAnimeFormatter.type}
        />
      </section>
      <Synopsis
        genres={animeInfo.genres}
        synopsis={animeInfo.synopsis}
      />
      <Status
        status={infoAnimeFormatter.status}
        aired={infoAnimeFormatter.publishing}
      />
      <Characters getAnimeCharacters={getAnimeCharacters} />
    </section>
  )
}
