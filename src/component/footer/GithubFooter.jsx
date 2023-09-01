import { github } from "../../metadata";
import GithubIcon from "../svg/GithubIcon";
import "../css/githubicon.css";

export function GithubFooter() {
	return (
		<footer className="github_link_contener">
			<a target="_blank" className="github_link" href={github.githubProject}>
				Source code <GithubIcon />
			</a>

			<a
				target="_blank"
				className="github_link github_link_profile"
				href={github.github}
			>
				My GitHub <GithubIcon isMyProfileComponent={true} />
			</a>
		</footer>
	);
}
