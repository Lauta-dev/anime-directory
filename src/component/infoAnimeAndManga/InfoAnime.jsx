import { useInfoAnime } from "../../hooks/infoAnime";
import { AnimeCard } from "../TopAnimeCard";
import { Image } from "./Image";
import { InfoMangaAndAnime } from "./Information";
import { Status } from "./Status";
import { Titles } from "./Title";

import '../css/animeID.css'
import { Synopsis } from "./Synopsis";

export function InfoAnime({ globalInfo: animeInfo, image, titles, ch }) {
  const { infoAnimeFormatter } = useInfoAnime({ data: animeInfo })

  return (
    <section>
      <Image imageURL={image.jpg.imageURL} />
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
      <h2>Characters</h2>
      <AnimeCard isCharacterAnime={true} animeArray={ch} />
    </section>
  )
}
