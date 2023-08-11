import { useContext } from "react";
import { Select } from "./ChangeAnimeOrManga";
import { filtersContext } from "../context/filtersContext";
import genresJSON from '../mocks/genres.json'

export function Genres() {
	const { filtersAll, setfiltersAll } = useContext(filtersContext);
  const newArray = genresJSON.data

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
        {newArray?.map((data) => (
          <option key={data.mal_id} value={data.mal_id}>
            {data.name}
					</option>
				))}
			</Select>
		</section>
	);
}
