import { useContext, useRef, useState } from "react";
import { Link, useLocation } from "wouter";

import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import { ActiveOrDesactiveNSFW } from "./ActiveOrDesactiveNSFW";
import { ChangeAnimeOrManga } from "./ChangeAnimeOrManga";

import "./css/input.css";
import { searchInput } from "../Routers/paths";
import Pages from "./Pages";

export function Input() {
	const [anime, setAnime] = useState('');
  const ref = useRef(false)


	const { type } = useContext(SelectAnimeOrMangaContext);

  const handleFocus = () => ref.current = true 

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

      {/* aqui el codigo */}
      
      


		</>
	);
}
