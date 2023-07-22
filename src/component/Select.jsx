import { useState } from "react";

export function Select() {
	const [nose, setNose] = useState("");
	console.log(nose);

	return (
		<>
			<label htmlFor="pet-select">Category</label>
			<select id="pet-select" onChange={(e) => setNose(e.target.value)}>
				<option value="tv">Anime</option>
				<option value="manga">Manga</option>
				<option value="hentai">Hentar +18</option>
			</select>
		</>
	);
}
