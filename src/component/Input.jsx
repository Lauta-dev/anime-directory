import { useContext, useState } from "react";

import { useLocation } from "wouter";

import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";

import "./css/input.css";

import Filters from "./Filters";
import { searchInput } from "../Routers/paths";
import { Loupe } from "./svg/loupe";

const Filter = () => {
	return (
		<section className="menu-overlay">
			<Filters />
		</section>
	);
};

export function Input() {
	const [, setLocation] = useLocation();

	const [showFilters, setShowFilters] = useState(false);

	const { type } = useContext(SelectAnimeOrMangaContext);

	function handleSubmit(e) {
		e.preventDefault();
		const { title } = Object.fromEntries(new FormData(e.target));
		const newLocation = searchInput({ title, type });
		setLocation(newLocation);
		document.title = `Search: ${title}`;
	}

	function handleShowFilters() {
		setShowFilters(!showFilters);
	}

	return (
		<>
			<section className="conteiner_search">
				<section className="input_conteiner">
					<form onSubmit={handleSubmit}>
						<input
							minLength={3}
							maxLength={100}
							required
							autoComplete="off"
							id="search"
							className="input_search"
							type="text"
							placeholder="Dragon Ball, Hunter X Hunter, Vinland Saga..."
							name="title"
						/>

						<button id="submit" type="submit">
							<Loupe />
						</button>
					</form>
				</section>
			</section>

			<button type="button" onClick={handleShowFilters}>
				Filters
			</button>

			{showFilters && <Filter />}
		</>
	);
}
