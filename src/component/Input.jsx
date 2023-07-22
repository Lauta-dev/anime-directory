import { useContext, useState } from "react";
import { Link } from "wouter";
import { FORMAT_TYPES } from "../TYPES";
import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import "./css/input.css";

export function Input() {
	const [anime, setAnime] = useState();

	const { a, setA } = useContext(SelectAnimeOrMangaContext);
	const newArrayFromFormatType = Object.values(FORMAT_TYPES);

	return (
		<div className="conteiner_search">
			<label htmlFor="pet-select">Category</label>
			<select id="pet-select" onChange={(e) => setA(e.target.value)}>
				{newArrayFromFormatType.map((value) => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</select>

			<input
				className="input_search"
				type="text"
				placeholder="Dragon Ball, Hunter X Hunter, Vinland Saga..."
				onChange={(evet) => setAnime(evet.target.value)}
			/>
			{anime ? (
				<Link to={`/${a}/selected/${anime}`} className="btn_search">
					Search
				</Link>
			) : (
				<Link to="#" className="btn_search">
					Search
				</Link>
			)}
		</div>
	);
}
