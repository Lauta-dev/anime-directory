import { useAnimeSelected } from './useAnimeSelected'

export function useInfoManga ({ data }) {
  const { globalInfo } = useAnimeSelected({ data })

  const infoMangaFormatter = {
    ...globalInfo,
    chapters: data.chapters,
    published: data.published.string,
    publishing: data.publishing,
    volumes: data.volumes,
    authors: data.authors.map((data) => ({
      id: data.mal_id, ...data
    }))
  }

  return { infoMangaFormatter }
}
