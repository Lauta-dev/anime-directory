import { Link } from "wouter";
import "../css/header.css";
import { useGetSession } from "../../supabase/getSession";
import authWithGoogle from "../../supabase/authWithGoogle";
import { useState } from "react";
import MenuIcon from "../svg/menu";
import supabase from "../../supabase/supabase";
import GoogleIcon from "../svg/GoogleIcon";
import ListIfExistSession from "./ListIfExistSession";
import metadata from "../../metadata";
import GithubIcon from "../svg/GithubIcon";

import "../css/githubicon.css";

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
				style={{ display: expand ? "flex" : "none", justifyContent: "center" }}
			>
				<li>
					{session?.session === null ? (
						<>
							<button className="button_sign_in" onClick={auth}>
								Sign in with <GoogleIcon />
							</button>
						</>
					) : (
						<ListIfExistSession />
					)}
				</li>

				<li className="github_link_contener">
					<footer>
						<a
							style={{ fontFamily: "Roboto-google-normal" }}
							target="_blank"
							className="github_link"
							href={metadata.githubProject}
						>
							Source code <GithubIcon />
						</a>

						<a
							target="_blank"
							className="github_link github_link_profile"
							href={metadata.github}
						>
							My GitHub <GithubIcon isMyProfileComponent={true} />
						</a>
					</footer>
				</li>
			</ul>
		</header>
	);
}
