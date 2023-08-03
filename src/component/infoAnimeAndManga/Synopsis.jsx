import { useState } from "react";
import "./css.css";

export function Synopsis({  synopsis }) {
	const [hideDescription, setHideDescription] = useState(false);

	return (
		<>
				<section className="descri">
					<h2>Description:</h2>

					<div className={`description ${hideDescription ? "expanded" : ""}`}>
						<p>{synopsis}</p>
					</div>
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

		</>
	);
}
