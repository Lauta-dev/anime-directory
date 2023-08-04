import { Link } from "wouter";
import "./css/header.css";
import { useState } from "react";
import Filters from "./Filters";

export function Header() {
	const [checkend, setCheckend] = useState(false);
	const on = () => setCheckend(!checkend);

	return (
		<header>
			<ul>
				<li>
					<Link to="/">
						<img
							id="logo"
							src="/web_page_icon.svg"
							alt="Logo de la pagina web"
						/>
					</Link>
				</li>
				<li id="github">
					<Link to="/">
						<h2>Anime directory</h2>
					</Link>
				</li>

				<li>
					<input
						onClick={on}
						type="checkbox"
						id="menu-toggle"
						checked={checkend}
						defaultChecked={checkend}
					/>
					<label htmlFor="menu-toggle" className="menu-icon">
						{" "}
						Menu
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
							/>
						</svg>
					</label>
					<div className="menu-overlay">
						<button onClick={on}>Show</button>
            <Filters />
					</div>
				</li>
			</ul>
		</header>
	);
}
