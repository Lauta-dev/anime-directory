import { AnimeCard } from "../TopAnimeCard";
import { Image } from "./Image";
import { InfoMangaAndAnime } from "./Information";
import { Status } from "./Status";
import { Titles } from "./Title";

export function InfoManga({ infoManga, isManga, image, titles, ch }) {
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
      <h2>Characters</h2>
      <Status
        status={infoManga.status}
        aired={infoManga.publishing}
      />
      <AnimeCard isCharacterAnime={true} animeArray={ch} />
    </section >
  )
}
