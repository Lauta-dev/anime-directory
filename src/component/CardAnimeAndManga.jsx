import { Link } from 'wouter'
import { useAnimeSelected } from '../hooks/useAnimeSelected'
import { ROUTE } from '../TYPES'
import { Image } from './infoAnimeAndManga/Image'
import { useEffect, useState, useContext } from 'react'
import { SelectAnimeOrMangaContext } from '../context/selectAnimeOrManga'

export function CardAnimeAndManga ({ animeArray }) {
  const [selectedAnimeData, setSelectedAnimeData] = useState([])
  const { a } = useContext(SelectAnimeOrMangaContext)

  useEffect(() => {
    const fetchData = async () => {
      const animeData = await Promise.all(
        animeArray.slice(0, 5).map(data => useAnimeSelected({ data }))
      )
      setSelectedAnimeData(animeData)
    }
    fetchData()
  }, [animeArray])

  return (
    selectedAnimeData && selectedAnimeData.map(({ globalInfo, image }) => {
      const { title, score, type, id } = globalInfo
      return (
        <div className='anime_card' key={id}>
          <Link to={`/${a}/selected/${ROUTE.id}/${id}`}>
            <Image type={type} title={title} imageURL={image.webp.imageURL} />
            <div className='conteiner_info'>
              <strong>{title}</strong>
              <p>Score: {score}</p>
            </div>
          </Link>
        </div>
      )
    })
  )
}
