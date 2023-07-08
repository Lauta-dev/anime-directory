import { Animes } from './Animes'
import { useAnimeSelected } from '../hooks/useAnimeSelected'
export function ListOfAnimes({ animeArray, nARenderizar, section }) {
  const newArray = animeArray.slice(0, nARenderizar)

  return (
    <section id='top_anime_conteiner'>
      <h2> {section} </h2>
      {
        newArray && newArray.map((data) => {
          const { newObj } = useAnimeSelected({ data: data })

          return (
            <Animes
              key={newObj.id}
              imagen={newObj.images.webp.largeImageUrl}
              malId={newObj.id}
              title={newObj.title}
              score={newObj.score}
              type={newObj.type}
              genres={newObj.genres}
            />
          )
        })
      }
    </section>
  )
}
