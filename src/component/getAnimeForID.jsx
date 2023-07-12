import { Order } from './Order'
import { useGetAnime } from '../hooks/getAnimeForID'

export default function GetAnimeForID({ params }) {
  const { animeID } = useGetAnime({ params })
  console.log(animeID)

  return (
    <>
      {animeID ? <Order data={animeID} /> : <p>No existe tal anime</p>}
    </>
  )
}
