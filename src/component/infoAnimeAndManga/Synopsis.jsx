import { useState } from "react";
import { Genres } from "./Genres";

import "./css.css";

export function Synopsis({ genres, synopsis }) {
	const [hideDescription, setHideDescription] = useState(false);

	return (
		<>
			<div>
				<div className="descri">
					<h2>Description:</h2>

					<div className={`description ${hideDescription ? "expanded" : ""}`}>
						<p>{synopsis}</p>
					</div>
				</div>
			</div>

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
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 less"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
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
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 8.25l-7.5 7.5-7.5-7.5"
						/>
					</svg>
				</button>
			)}

			<Genres genres={genres} />
		</>
	);
}
