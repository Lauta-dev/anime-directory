export function useAnimeSelected({ data }) {
  const newObj = {
    id: data.mal_id,
    title: data.title,
    titleEnglish: data.title_english,
    titleJapanese: data.title_japanese,
    type: data.type,
    source: data.source,
    duration: data.duration,
    rating: data.rating,
    synopsis: data.synopsis,
    score: data.score,
    genres: data.genres,
    images: {
      jpg: {
        imageUrl: data.images.jpg.image_url,
        smallImageUrl: data.images.jpg.small_image_url,
        largeImageUrl: data.images.jpg.large_image_url,
      },
      webp: {
        imageUrl: data.images.image_url,
        smallImageUrl: data.images.webp.small_image_url,
        largeImageUrl: data.images.webp.large_image_url,
      }
    },
    episodes: data.episodes,
    studios: data.studios, // []
    status: data.status,
    aired: data.aired.string,
    popularity: data.popularity
  }

  const titles = [{
    id: crypto.randomUUID(),
    title: newObj.title
  }, {
    id: crypto.randomUUID(),
    title: newObj.titleEnglish
  }, {
    id: crypto.randomUUID(),
    title: newObj.titleJapanese
  }]

  return { newObj, titles }
}
