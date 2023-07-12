import { useInfoManga } from "../../hooks/infoManga";
import { AnimeCard } from "../TopAnimeCard";
import { Image } from "./Image";
import { InfoMangaAndAnime } from "./Information";
import { Status } from "./Status";
import { Titles } from "./Title";
import { Synopsis } from './Synopsis'

import '../css/animeID.css'
import { useAnimeCharacter } from "../../hooks/useAnimeCharacter";

export function InfoManga({ infoManga, image, titles }) {
  const { infoMangaFormatter } = useInfoManga({ data: infoManga })
  const { getAnimeCharacters } = useAnimeCharacter({ id: infoMangaFormatter.id, type: 'manga' })

  return (
    <section>
      <Image imageURL={image.jpg.imageURL} />
      <section>
        <Titles titles={titles} />
        <InfoMangaAndAnime
          popularity={infoMangaFormatter.popularity}
          chapters={infoMangaFormatter.chapters}
          status={infoMangaFormatter.status}
          score={infoMangaFormatter.score}
          type={infoMangaFormatter.type}
        />
      </section>
      <Synopsis
        genres={infoManga.genres}
        synopsis={infoManga.synopsis}
      />
      <Status
        status={infoMangaFormatter.status}
        aired={infoMangaFormatter.publishing}
      />
      <h2>Characters</h2>
      <AnimeCard isCharacterAnime={true} animeArray={getAnimeCharacters} />
    </section>
  )
}
