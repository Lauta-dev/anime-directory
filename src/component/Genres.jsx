import { useContext, useEffect, useState } from "react";
import { Select } from "./ChangeAnimeOrManga";
import { filtersContext } from "../context/filtersContext";

export function Genres() {
	const [genres, setGenres] = useState(null);
	const { filtersAll, setfiltersAll } = useContext(filtersContext);

	useEffect(() => {
		fetch("https://api.jikan.moe/v4/genres/anime")
			.then((res) =>
				res.ok
					? res.json()
					: { error: "Error al obtener los generos de Animes" },
			)
			.then((data) => setGenres(data.data))
			.catch((err) => {
				throw new Error(err);
			});
	}, []);

	if (genres === null) return <b> Cargando </b>;
	function handleToggleGenres(data) {
		const genres = data.target.value;

		setfiltersAll((prev) => ({
			...prev,
			genres,
		}));
	}

	return (
		<section>
			<label htmlFor="genres">Genres</label>
			<Select id={"genres"} onChange={handleToggleGenres}>
				<option value="">Remove filter</option>
				{genres?.error
					? "error"
					: genres?.map((data) => (
							<option key={data.mal_id} value={data.mal_id}>
								{data.name}
							</option>
					  ))}
			</Select>
		</section>
	);
}
