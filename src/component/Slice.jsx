import { useEffect, useState } from "react"
import getCharacter from "../logic/getCharacters"

export default function Asd({ malId }) {
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    getCharacter(malId)
      .then(({ data }) => {
        setAnimes(data.slice(0, 4))
      })
  }, [])

  return (
    <div className='slider'>
      {animes && animes.map((data) => {
        const { character } = data
        const { name, images } = character
        const { jpg } = images
        const { image_url } = jpg

        return (
          <>
            <div>
              <img id='img' src={image_url} alt={name} />
              <strong>{name}</strong>
            </div>
          </>
        )
      })}
    </div>
  )
}