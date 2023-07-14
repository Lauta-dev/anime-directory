import { Characters } from './Characters'
import { Image } from './Image'
import { InfoMangaAndAnime } from './Information'
import { Status } from './Status'
import { Titles } from './Title'

export function InfoManga ({ infoManga, image, titles }) {
  return (
    <section>
      <Image imageURL={image.jpg.imageURL} />
      <section>
        <Titles titles={titles} />
        <InfoMangaAndAnime
          popularity={infoManga.popularity}
          chapters={infoManga.chapters}
          status={infoManga.status}
          score={infoManga.score}
          type={infoManga.type}
        />
      </section>
      <Status
        status={infoManga.status}
        aired={infoManga.publishing}
      />
      <Characters getAnimeCharacters={infoManga} />
    </section>
  )
}
