import { Slice } from "./Slice"

function TopAnime({ animeArray }) {
  return (
    <Slice>
      {
        animeArray && animeArray.slice(0, 5).map((data) => {
          const id = data.mal_id
          const { images, title } = data
          const { webp } = images
          const { image_url } = webp
          return <img key={id} src={image_url} alt={title} />
        })
      }
    </Slice>
  )
}

function AnimeCharacter({ animeArray }) {
  return (
    <Slice>
      {
        animeArray && animeArray.slice(0, 6).map((data) => {
          const { character } = data
          const id = character.mal_id

          return (
            <img key={id} src={character.images.webp.image_url} />
          )
        })
      }
    </Slice>
  )
}

export function AnimeCard({ animeArray, isCharacterAnime }) {

  return isCharacterAnime
    ? <AnimeCharacter animeArray={animeArray} />
    : <TopAnime animeArray={animeArray} />
}

