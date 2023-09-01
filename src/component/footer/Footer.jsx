import { resouce } from "../../metadata";
import { GithubFooter } from "./GithubFooter";
import "./footer.css";

function Footer() {
	return (
		<footer className="footer">
			<GithubFooter />

			<ul className="credict">
				<li>
					<b>{resouce.hosting.type}</b>
					<a href={resouce.hosting.url}>{resouce.hosting.name}</a>
				</li>
				<li>
					<b>{resouce.backend.type}</b>
					<a href={resouce.backend.url}>{resouce.backend.name}</a>
				</li>
				<li>
					<b>{resouce.API.type}</b>
					<a href={resouce.API.url}>{resouce.API.name}</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
