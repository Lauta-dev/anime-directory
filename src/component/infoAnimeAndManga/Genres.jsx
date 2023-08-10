import { Link } from "wouter";
import "../css/gender.css";

const colors = [" #ffd60a ", " #ffd6ba ", " #f7fff7 ", "#a9d6e5", "#a7c957"];

export function Genres({ genres }) {
	return (
		<div className="genres_conteiner">
			<h2>Genres</h2>
			<ul className="lista_description">
				{genres.map(({ name, mal_id }, index) => (
					<li
						className="links"
						key={mal_id}
						style={{ backgroundColor: colors[index] }}
					>
						<Link to={`/anime/category/${name}/${mal_id}`}>{name} </Link>
					</li>
				))}
			</ul>
		</div>
	);
}
