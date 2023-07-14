import { useEffect, useState } from 'react'
import { getMangaForId as GetMangaForId } from '../logic/getMangaForID'

export function useMangaForId ({ id }) {
  const [getMangaForId, setMangaForId] = useState(null)

  useEffect(() => {
    GetMangaForId(id)
      .then(data => {
        return setMangaForId(data)
      })
  }, [])

  return { getMangaForId }
}
