import { useContext, useRef, useState, useMemo } from "react";

import { useLocation } from "wouter";

import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";

import "./css/input.css";

import Filters from "./Filters";
import { searchInput } from "../Routers/paths";
import { Loupe } from "./svg/loupe";

const A = () => {
	return (
		<section className="menu-overlay">
			<Filters />
		</section>
	);
};

export function Input() {
	const [location, setLocation] = useLocation();

	const [memo, setMeno] = useState(false);

	const { type } = useContext(SelectAnimeOrMangaContext);

	const memoa = useMemo(() => {
		if (memo) {
			return <A hideDescription={memo} />;
		}
	}, [memo]);

	function handleSubmit(e) {
		e.preventDefault();
		const { title } = Object.fromEntries(new FormData(e.target));
		setLocation(searchInput({ title, type }));
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
							onFocus={true}
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

			<button
				type="button"
				onClick={() => {
					setMeno(!memo);
				}}
			>
				Filters
			</button>

			{memoa}
		</>
	);
}
