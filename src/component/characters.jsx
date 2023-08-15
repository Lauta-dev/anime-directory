import { Link } from 'wouter'
import { newObjet } from '../TYPES'
import { getCharacterInfo } from '../logic/getCharactersInfo'
import { useEffect, useState } from 'react'

import './css/characters_info.css'

function Anime({ arrayMangaOrAnime, type }) {
  return (
    <section>
      <header>
        <b>{type.toUpperCase()}</b>
      </header>
      <section className='manga_or_anime'>
        {arrayMangaOrAnime.map((data) => {
          const ifExistAnime = data.anime ? data.anime : data.manga
          const isAnime = type === 'anime' ? newObjet.anime : newObjet.manga

          return (
            <Link key={ifExistAnime.mal_id} to={`/${isAnime}/id/${ifExistAnime.mal_id}`}>
              <img width={'150px'} src={ifExistAnime.images.webp.image_url} alt="" />
            </Link>
          )
        })}
      </section>
    </section>
  )
}

function Voices({ voices }) {
  return (
    <>
      <header>
        <h2>Voices</h2>
      </header>
      {voices.map(({ person, language }) => {
        return (
          <div className='voices' key={person.mal_id}>
            <picture>
              <img width={'50px'} src={person.images.jpg.image_url} alt={person.name} />
            </picture>

            <section>
              <b>{person.name}</b>
              <p>{language}</p>
              <a href={person.url} target='_blank' >View more info in MAL</a>
            </section>
          </div>
        )
      })}
    </>
  )
}

export default function Characters({ params }) {
  const { id } = params

  const [data, setData] = useState(null)
  useEffect(() => {
    getCharacterInfo({ id }).then(({ data }) => setData(data))
  }, [])

  if (data === null || data === undefined) return <h1>Loading...</h1>

  const { anime, manga, voices } = data

  return (
    <section>
      
      <ul className='view_pic'>
        <li>
          <img src={data.images.jpg.image_url} alt="" />
        </li>
        <li className='name'>
          <b>{data.name}</b>
        </li>
        <li className='name_kanji'>
          <b>{data.name_kanji}</b>
        </li>
      </ul>

      <article className='about_section'>
        <header>
          <h2>About</h2>
        </header>
        {data.about}
      </article>

      {voices.length ? (
        <section className='voices_section'>
          <Voices voices={voices} />
        </section>
      ) : null}

      <section className='section_product'>
        <Anime type={'manga'} arrayMangaOrAnime={manga} />
        {anime.length ? <Anime type={'anime'} arrayMangaOrAnime={anime} /> : null}

      </section>
    </section>
  )
}
