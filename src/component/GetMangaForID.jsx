import { useMangaForId } from '../hooks/useMangaForID'
import { Order } from './Order'

export default function GetMangaForID({ params }) {
  const { malId } = params
  const { getMangaForId } = useMangaForId({ id: malId })
  console.log(malId)

  return (
    <>
      {getMangaForId ? <Order data={getMangaForId} /> : <p>No existe tal anime</p>}
    </>
  )
}
