import { useAnimeSelected } from "./useAnimeSelected"

export function useInfoAnime({ data }) {
  const { globalInfo } = useAnimeSelected({ data })

  const infoAnimeFormatter = {
    ...globalInfo,
    source: data.source,
    episodes: data.episodes,
    studios: data.studios, // []
    duration: data.duration,
    rating: data.rating,
  }

  return { infoAnimeFormatter }
}
