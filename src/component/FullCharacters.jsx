import { useEffect, useState } from "react";
import { JIKAN_API_CHARACTERS } from "../const";

import "./css/characters.css";
import { Link, useLocation } from "wouter";
import { useSearchMangaOrAnimeRegex } from "../hooks/useSearchMangaOrAnimeRegex";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { characterPaths } from "../Routers/paths";

function getData({ data, type, id }) {
	return (
		<>
			{data.map(({ character }) => {
				const id = character.mal_id;
				const { name, images } = character;
				const webp = images.webp.image_url;

				return (
					<Link
						to={characterPaths({ name, id })}
						className="character_all_conteiner"
						key={id}
					>
						<b>{name}</b>
						<LazyLoadImage
							src={webp}
							width="100px"
							alt={`Image from ${name} of ${type}`}
						/>
					</Link>
				);
			})}
		</>
	);
}

function get() {
	const [location] = useLocation();
	const [characters, setCharacters] = useState(null);

	const { isAnime } = useSearchMangaOrAnimeRegex(location);
	const extracId = location.match(/\/(\d+)\//)[1];

	useEffect(() => {
		async function getCharacters() {
			try {
				const fetching = await fetch(
					JIKAN_API_CHARACTERS({ type: isAnime, id: extracId }),
				);
				if (!fetching.ok)
					return setCharacters({ error: "Error al obtener los datos" });

				const res = await fetching.json();
				return setCharacters(res.data);
			} catch (error) {
				throw new Error(error);
			}
		}

		getCharacters();
	}, []);

	return { characters, isAnime, extracId };
}

export default function FullCharacters() {
	const { characters, isAnime, extracId } = get();

	if (characters === null) return <h1>Cargando</h1>;

	return (
		<section className="character_conteiner">
			{characters.error
				? JSON.stringify(characters.error)
				: getData({ data: characters, type: isAnime, id: extracId })}
		</section>
	);
}
