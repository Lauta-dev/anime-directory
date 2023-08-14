import { useState } from 'react'
import char from '../../eliminar/char.json'

export default function Characters() {
  const data = char.data
  const { voices, anime, manga } = data
  const [getVoices, setGetVoices] = useState(voices)

  return (
    <section>
      <ul>
        <li>
          <img src={data.images.webp.image_url} alt="" />
        </li>
        <li>
          <b>Name: {data.name}</b>
          <br />
          <b>Kanji: {data.name_kanji}</b>
        </li>
      </ul>

      <article>
        {data.about}
      </article>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {getVoices.map(({ person, language }) => {

          return (
            <div style={{
              display: 'flex',
              gap: '10px'
            }} key={person.mal_id}>
              <picture>
                <img width={'50px'} src={person.images.jpg.image_url} alt={person.name} />
              </picture>

              <section>
                <b>{person.name}</b>
                <p>{language}</p>
              </section>
            </div>
          )
        })}
      </section>
      <header>
        <b>ANIME</b>
      </header>
      <section>
        {anime.map(({ anime }) => {
          return (
            <>
              <img key={anime.mal_id} width={'100px'} src={anime.images.webp.image_url} alt="" />
            </>
          )
        })}
      </section>

      <header>
        <b>MANGA</b>
      </header>
      <section>
        {manga.map(({ manga }) => {
          return (
            <>
              <img width={'100px'} key={manga.mal_id} src={manga.images.webp.image_url} alt="" />
            </>
          )
        })}
      </section>

    </section>
  )
}
