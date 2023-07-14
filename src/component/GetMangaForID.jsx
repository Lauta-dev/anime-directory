import { useMangaForId } from '../hooks/useMangaForID'
import { Order } from './Order'

/**
 * @param {number} params id del manga que viene como parametro de la URL
 */
export default function GetMangaForID ({ params }) {
  const { malId } = params
  const { getMangaForId } = useMangaForId({ id: malId })

  return getMangaForId ? <Order data={getMangaForId} /> : <h1>Cargando....</h1>
}
