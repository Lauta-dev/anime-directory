import { Order } from "./Order";
import { useGetAnime } from "../hooks/getAnimeForID";
import { useSearchMangaOrAnimeRegex } from "../hooks/useSearchMangaOrAnimeRegex";

export default function GetAnimeForID({ params }) {
	const { isAnime } = useSearchMangaOrAnimeRegex();
	const { animeID, loading } = useGetAnime({ params, type: isAnime });

	console.log({ loading, animeID });

	return (
		<>
			{!loading ? (
				<>
					<h1 style={{ height: "100vh" }}>Loading...</h1>
				</>
			) : loading && animeID.data ? (
				<Order data={animeID.data} />
			) : null}

			{loading && animeID?.error ? (
				<section>
					<h2>No se encontro el anime: {params.id}</h2>
					<a href={window.location.origin}>Volver al inicio</a>

					<br />

					<textarea>{JSON.stringify(animeID)}</textarea>
				</section>
			) : null}
		</>
	);
}
