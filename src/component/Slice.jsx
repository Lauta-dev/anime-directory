import { useEffect, useState } from "react"
import getCharacter from "../logic/getCharacters"

import './css/a.css'

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
        const id = character.mal_id
        const { name, images } = character
        const { webp } = images
        const { image_url } = webp

        return (
          <div key={id}>
            <img id='img' src={image_url} alt={name} />
            <strong>{name}</strong>

          </div>
        )
      })}
    </div>
  )
}
