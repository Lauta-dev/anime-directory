import { Order } from "./Order";
import { useGetAnime } from "../hooks/getAnimeForID";
import { useSearchMangaOrAnimeRegex } from "../hooks/useSearchMangaOrAnimeRegex";

export default function GetAnimeForID({ params }) {
  const { isAnime } = useSearchMangaOrAnimeRegex()
  console.log({ isAnime, params })
	const { animeID } = useGetAnime({ params, type: isAnime });

	if (animeID === null) return <h1>Cargando</h1>

	if (animeID?.data) {
		return <Order data={animeID.data} />;
	} else {
		const { error } = animeID;
		console.log('asdasdas');
	}
}
