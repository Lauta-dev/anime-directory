import { Link } from "wouter";
import "./css/header.css";
import { useGetSession } from "../supabase/getSession";
import authWithGoogle from "../supabase/authWithGoogle";
import GoolgleIcon from "./svg/google";
import { useState } from "react";
import MenuIcon from "./svg/menu";
import supabase from "../supabase/supabase";

export function Header() {
	const [expand, useExpand] = useState(false);
	const { session, connect, useConnect } = useGetSession();

	const handleClick = () => {
		useExpand(!expand);
	};

	const signOut = async () => {
		await supabase.auth.signOut();
		useConnect(!connect);
	};

	const auth = () => {
		authWithGoogle();
	};

	return (
		<header>
			<ul className="menu_header">
				<li>
					<Link to="/">
						<img
							width="60rem"
							id="logo"
							src="/web_page_icon.svg"
							alt="Logo de la pagina web"
						/>
						<b>Anime directory</b>
					</Link>
				</li>
				<li>
					<button className="button_sign_in" onClick={handleClick}>
						<MenuIcon />
					</button>
				</li>
			</ul>

			<ul
				className="menu_expand"
				style={{ display: expand ? "block" : "none" }}
			>
				<li>
					{session?.session === null ? (
						<>
							<button className="button_sign_in" onClick={auth}>
								Sign in with <GoolgleIcon />
							</button>
						</>
					) : (
						<>
							<button onClick={signOut}>Sign out</button>
							<Link to="/profile">View list</Link>
						</>
					)}
				</li>
			</ul>
		</header>
	);
}
