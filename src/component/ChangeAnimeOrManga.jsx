import { useContext } from "react";
import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import { FORMAT_TYPES } from "../TYPES";
import "./css/mangaOrAnime.css";

export function Select({ children, id, onChange }) {
	return (
		<>
			<select name={id} id={id} onChange={onChange}>
				{children}
			</select>
		</>
	);
}

export const ChangeAnimeOrManga = () => {
	const { setType } = useContext(SelectAnimeOrMangaContext);
	const newArrayFromFormatType = Object.values(FORMAT_TYPES);

	return (
		<div className="SelectAnimeOrManga">
			<label htmlFor="category">Category</label>

			<Select id={"category"} onChange={(e) => setType(e.target.value)}>
				{newArrayFromFormatType?.map(({ type, id }) => (
					<option key={id} value={type}>
						{type.toLocaleUpperCase()}
					</option>
				))}
			</Select>
		</div>
	);
};
