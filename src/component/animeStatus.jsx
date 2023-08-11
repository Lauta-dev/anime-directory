import { useContext, useState } from "react";
import { filtersContext } from "../context/filtersContext";
import { Select } from "./ChangeAnimeOrManga";

export function AnimeStatus() {
	const { filtersAll, setfiltersAll } = useContext(filtersContext);
	const [stateChosen, setStateChosen] = useState(null);
	const status = ["", "airing", "complete", "upcoming"];

	function handleChangeOption(data) {
		const status = data.target.value;

		setfiltersAll((prev) => ({
			...prev,
			status,
		}));
	}

	return (
		<>
			<Select id={"status"} onChange={handleChangeOption}>
				{status.map((data) => (
					<option value={data} key={data}>
						{data.toUpperCase()}
					</option>
				))}
			</Select>
		</>
	);
}
