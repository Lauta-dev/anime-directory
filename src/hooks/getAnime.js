import { useState, useEffect, useContext } from 'react'
import { getAnimeAndManga } from '../logic/getAnime'
import { SelectAnimeOrMangaContext } from '../context/selectAnimeOrManga'

export function useGetAnime({ params }) {
  const { a } = useContext(SelectAnimeOrMangaContext)

  const { title } = params
  const [animeData, setAnimeData] = useState([])

  useEffect(() => {
    getAnimeAndManga({ input: title, type: a })
      .then(({ data }) => setAnimeData(data))
  }, [title])

  return { animeData }
}
