import { Link } from "wouter";
import MenuIcon from "../svg/menu";
import { namesPage, webPage } from "../../metadata";
import { useState } from "react";
import { AuthComponent } from "./Auth";

export const Menu = ({ useExpand, expand }) => {
	const handleClick = () => {
		useExpand(!expand);
	};

	return (
		<ul className="menu_header">
			<li>
				<Link to={webPage.origin}>
					<img
						width="60rem"
						id="logo"
						src="/web_page_icon.svg"
						alt="Logo de la pagina web"
					/>
					<b>{namesPage.mayus}</b>
				</Link>
			</li>
			<li>
				<button className="button_sign_in" onClick={handleClick}>
					<MenuIcon />
				</button>
			</li>
		</ul>
	);
};

export const ExpandMenu = ({ expand, user }) => {
	return (
		<section
			className="menu_expand"
			style={{
				display: expand ? "flex" : "none",
				justifyContent: "center",
			}}
		>
			<AuthComponent user={user} />
		</section>
	);
};

export function A({ user }) {
	const [expand, useExpand] = useState(false);

	return (
		<header>
			<Menu expand={expand} useExpand={useExpand} />
			<ExpandMenu expand={expand} user={user} />
		</header>
	);
}
