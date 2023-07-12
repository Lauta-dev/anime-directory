import { useAnimeSelected } from '../hooks/useAnimeSelected'
import jsonFileCh from '../json/formatter_ch.json'

import { InfoManga } from './infoAnimeAndManga/InfoManga'
import { InfoAnime } from './infoAnimeAndManga/InfoAnime'

export function Order({ data }) {
  const ch = jsonFileCh.data
  const { titles, image } = useAnimeSelected({ data })
  const isManga = data.episodes

  return (
    !isManga
      ? <InfoManga
        image={image}
        infoManga={data}
        titles={titles}
        ch={ch}
      />
      : <InfoAnime
        image={image}
        globalInfo={data}
        titles={titles}
        ch={ch}
      />
  )
}
