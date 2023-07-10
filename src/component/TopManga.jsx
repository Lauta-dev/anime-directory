import { useTopManga } from "../hooks/useTopManga";
import { Animes } from "./Animes";

export default function TopManga() {
  const { topManga } = useTopManga()

  return (
    <>
      {topManga.slice(0, 3).map(data => (
        <Animes
          key={data.mal_id}
          imagen={data.images.webp.image_url}
          malId={data.mal_id}
          title={data.title}
          score={data.score}
          type={data.type}
          genres={data.genres}
        />
      ))}
    </>
  )
}