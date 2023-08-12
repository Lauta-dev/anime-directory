import { Link } from "wouter";
import { Slice } from "./Slice";
import "./css/image.css";
import { ROUTE } from "../TYPES";

function TopAnime({ animeArray }) {
	return (
		<Slice>
			{animeArray.slice(0, 6).map((data) => {
				const id = data.mal_id;
				const { images, title } = data;
				const { webp } = images;
				const { image_url } = webp;
				return (
          <Link key={id} to={`/anime/${ROUTE.id}/${id}`}>
					  <img className="imageCover" src={image_url} alt={title} />
          </Link>
				);
			})}
		</Slice>
	);
}

function AnimeCharacter({ animeArray }) {
	return (
		<Slice>
			{animeArray?.slice(0, 6).map((data) => {
				const { character } = data;
				const id = character.mal_id;
				return (
					<img
						className="imageCover"
						key={id}
						src={character.images.webp.image_url}
						alt={`Character: ${character.name}`}
					/>
				);
			})}
		</Slice>
	);
}

export function AnimeCard({ animeArray, isCharacterAnime }) {
	return isCharacterAnime ? (
		<AnimeCharacter animeArray={animeArray} />
	) : (
		<TopAnime animeArray={animeArray} />
	);
}
