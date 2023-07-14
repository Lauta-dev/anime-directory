import { Animes } from './Animes'
import { useAnimeSelected } from '../hooks/useAnimeSelected'
export function ListOfAnimes ({ animeArray, nARenderizar, section }) {
  const newArray = animeArray.slice(0, nARenderizar)

  return (
    <section id='top_anime_conteiner'>
      <h2> {section} </h2>
      {
        newArray && newArray.map((data) => {
          const { globalInfo, image } = useAnimeSelected({ data })
          return (
            <Animes
              key={globalInfo.id}
              imagen={image.webp.imageURL}
              malId={globalInfo.id}
              title={globalInfo.title}
              score={globalInfo.score}
              type={globalInfo.type}
            />
          )
        })
      }
    </section>
  )
}
