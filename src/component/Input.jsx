import { useContext, useRef, useState, useMemo } from "react";
import { Link } from "wouter";

import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";

import "./css/filters.css";

import "./css/input.css";
import { searchInput } from "../Routers/paths";
import Filters from "./Filters";

export function Input() {
	const [anime, setAnime] = useState("");
	const ref = useRef(false);
	const [hideDescription, setHideDescription] = useState(false);

	const [checkend, setCheckend] = useState(false);
	const on = () => setCheckend(!checkend);

	const { type } = useContext(SelectAnimeOrMangaContext);

	const handleFocus = () => (ref.current = true);

	return (
		<>
			<div className="conteiner_search">
				<label htmlFor="search">Search</label>
				<div className="input_conteiner">
					<input
						onFocus={handleFocus}
						autoComplete="off"
						id="search"
						className={`input_search focus ${ref.current ? "onfocus" : null}`}
						type="text"
						placeholder="Dragon Ball, Hunter X Hunter, Vinland Saga..."
						onChange={(evet) => setAnime(evet.target.value)}
					/>

					{anime?.length > 3 ? (
						<Link to={searchInput({ anime, type })} className="btn_search">
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

			<section className="conteiner_filters">
				<h3>Filters</h3>
				<section className={`f ${hideDescription ? "expanded" : ""}`}>
					<section className="menu-overlay">
						<Filters />
					</section>
				</section>

				{hideDescription ? (
					<button
						type="button"
						onClick={() => setHideDescription(!hideDescription)}
						className="buttonShowInfo btn"
					>
						Less{" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6 less"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</button>
				) : (
					<button
						type="button"
						onClick={() => setHideDescription(!hideDescription)}
						className="buttonShowInfo btn"
					>
						More{" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</button>
				)}
			</section>
		</>
	);
}
