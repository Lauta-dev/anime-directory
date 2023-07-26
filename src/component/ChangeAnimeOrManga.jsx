import { useContext } from "react";
import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import { FORMAT_TYPES, MANGA_FILTERS } from "../TYPES";
import { desactiveNSFWContext } from "../context/desactiveNSFW";

export const ChangeAnimeOrManga = () => {
	const { setType } = useContext(SelectAnimeOrMangaContext);
	const { nsfw } = useContext(desactiveNSFWContext);

	const newArrayFromFormatType = Object.values(FORMAT_TYPES);
	const newArrayFromFormatTypeManga = Object.values(MANGA_FILTERS);

	return (
		<div className="SelectAnimeOrManga">
			<label htmlFor="category">Category</label>
			<select id="category" onChange={(e) => setType(e.target.value)}>
				{nsfw
					? newArrayFromFormatType?.map(({ type, id }) => (
							<option key={id} value={type}>
								{type.toString()}
							</option>
					  ))
					: newArrayFromFormatTypeManga?.map(({ type, id }) => (
							<option key={id} value={type}>
								{type.toString()}
							</option>
					  ))}
			</select>
		</div>
	);
};
