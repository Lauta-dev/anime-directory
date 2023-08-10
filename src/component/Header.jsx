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
							width="60rem"
							id="logo"
							src="/web_page_icon.svg"
							alt="Logo de la pagina web"
						/>
						<h2>Anime directory</h2>
					</Link>
				</li>
			</ul>
		</header>
	);
}
