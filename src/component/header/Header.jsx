import { Link } from "wouter";
import "../css/header.css";
import { useGetUser } from "../../supabase/getUser";
import authWithGoogle from "../../supabase/authWithGoogle";
import { useState } from "react";
import MenuIcon from "../svg/menu";
import supabase from "../../supabase/supabase";
import GoogleIcon from "../svg/GoogleIcon";
import ListIfExistSession from "./ListIfExistSession";
import { webPage } from "../../metadata";

export function Header() {
	const [expand, useExpand] = useState(false);

	const { session } = useGetUser();

	const viewUser = session?.user;

	const handleClick = () => {
		useExpand(!expand);
	};

	const signOut = async () => {
		await supabase.auth.signOut();
	};

	const auth = () => {
		authWithGoogle();
	};

	return (
		<header>
			<ul className="menu_header">
				<li>
					<Link to={webPage.origin}>
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

			<section
				className="menu_expand"
				style={{ display: expand ? "flex" : "none", justifyContent: "center" }}
			>
				<ul>
					{!viewUser ? (
						<li>
							<button className="button_sign_in" onClick={auth}>
								Sign in with <GoogleIcon />
							</button>
						</li>
					) : (
						<ListIfExistSession signOut={signOut} />
					)}
				</ul>
			</section>
		</header>
	);
}
