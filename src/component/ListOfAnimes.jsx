import { Animes } from './Animes'
import { useAnimeSelected } from '../hooks/useAnimeSelected'
export function ListOfAnimes({ animeArray, nARenderizar, section }) {
  const newArray = animeArray.slice(0, nARenderizar)

  return (
    <section id='top_anime_conteiner'>
      <h2> {section} </h2>
      {
        newArray && newArray.map((data) => {
          const { newObj, image } = useAnimeSelected({ data })

          return (
            <Animes
              key={newObj.id}
              imagen={image.webp.imageURL}
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
