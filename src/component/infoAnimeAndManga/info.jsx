import { Characters } from "./Characters";
import { CheckIfExist } from "./CheckIfExist";
import { Genres } from "./Genres";
import { Image } from "./Image";
import { Synopsis } from "./Synopsis";
import { Titles } from "./Title";
import { Relations } from "./relations";

import '../css/trailer.css'

function Trailer({ youtubeId }) {
  return (
    <section className="trailer">
      <h2>Trailer</h2>
      <lite-youtube className='yt_vid' videoid={youtubeId}></lite-youtube>
    </section>
  )
}

export function Info({
  children,
  type,
  title,
  id,
  infoFormatter,
  titles,
  genres,
  synopsis,
  caracters,
  image,
  youtubeId,
  relations
}) {
  return (
    <>
      <Image type={type} title={title} imageURL={image.jpg.largeImageURL} />
      <CheckIfExist id={id} infoMangaFormatter={infoFormatter} />
      <Titles titles={titles} />
      {children}
      <Genres genres={genres} />
      <Synopsis synopsis={synopsis} />
      <Relations relations={relations} />
      {youtubeId && <Trailer youtubeId={youtubeId} />}
      <Characters getAnimeCharacters={caracters} />
    </>
  );
}
