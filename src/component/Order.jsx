import { useAnimeSelected } from '../hooks/useAnimeSelected'

import { InfoManga } from './infoAnimeAndManga/InfoManga'
import { InfoAnime } from './infoAnimeAndManga/InfoAnime'

export function Order({ data }) {
  const { titles, image } = useAnimeSelected({ data })
  const isManga = data.episodes

  return (
    !isManga
      ? <InfoManga
        image={image}
        infoManga={data}
        titles={titles}
        ch={'asd'}
      />
      : <InfoAnime
        image={image}
        animeInfo={data}
        titles={titles}
        ch={'ads'}
      />
  )
}
