import { useContext, useState } from "react";
import { Link } from "wouter";
import { FORMAT_TYPES, MANGA_FILTERS } from "../TYPES";
import { desactiveNSFWContext } from "../context/desactiveNSFW";
import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import "./css/input.css";

export function Input() {
	const [anime, setAnime] = useState();

	const { type, setType } = useContext(SelectAnimeOrMangaContext);
	const { nsfw, setNsfw } = useContext(desactiveNSFWContext);

	const newArrayFromFormatType = Object.values(FORMAT_TYPES);
	const newArrayFromFormatTypeManga = Object.values(MANGA_FILTERS);

	const activeNsfw = nsfw ? "Active NSWF" : "Desactive NSWF";

	return (
		<div className="conteiner_search">
			<label htmlFor="pet-select">Category</label>
			<select id="pet-select" onChange={(e) => setType(e.target.value)}>
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

			<div className="nsfw">
				<label htmlFor="check">{activeNsfw}</label>
				<input
					type="checkbox"
					name="check"
					id="check"
					onChange={() => setNsfw(!nsfw)}
					checked={nsfw}
				/>
			</div>

			<label htmlFor="search">Search</label>
			<div className="input_conteiner">
				<input
					id="search"
					className="input_search"
					type="text"
					placeholder="Dragon Ball, Hunter X Hunter, Vinland Saga..."
					onChange={(evet) => setAnime(evet.target.value)}
				/>

				{anime ? (
					<Link to={`/${type}/selected/${anime}`} className="btn_search">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 23 35"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>
					</Link>
				) : (
					<Link to="#" className="btn_search">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 23 35"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
							/>
						</svg>
					</Link>
				)}
			</div>
		</div>
	);
}
