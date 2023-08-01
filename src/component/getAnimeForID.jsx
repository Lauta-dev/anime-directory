import { Order } from "./Order";
import { useGetAnime } from "../hooks/getAnimeForID";
import { useSearchMangaOrAnimeRegex } from "../hooks/useSearchMangaOrAnimeRegex";
import { Link } from "wouter";

export default function GetAnimeForID({ params }) {
  const { isAnime } = useSearchMangaOrAnimeRegex()
	const { animeID } = useGetAnime({ params, type: isAnime });

	if (animeID === null) return <h1>Cargando</h1>
  
	if (animeID?.data) {
		return <Order data={animeID.data} />;
	} else {
		const { error } = animeID;
	  return  (
      <>
        <h2>No se encontró el recurso.</h2>
        <Link to="/">Volver a Home</Link>
      </>
     )
  }
}
