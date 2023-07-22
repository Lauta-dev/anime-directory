import { useEffect, useState } from "react";
import { ROUTE } from "../TYPES";
import { useAnimeSelected } from "../hooks/useAnimeSelected";
import { Image } from "./infoAnimeAndManga/Image";

import { Link } from "wouter";

import "./css/anime_card.css";

export function CardAnimeAndManga({ animeArray }) {
	const [selectedAnimeData, setSelectedAnimeData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const animeData = await Promise.all(
				animeArray.map((data) => useAnimeSelected({ data })),
			);
			setSelectedAnimeData(animeData);
		};
		fetchData();
	}, [animeArray]);

	return (
		<div className="cards">
			{selectedAnimeData?.map(({ globalInfo, image }) => {
				const { title, score, type, id, genres } = globalInfo;
				const isAnime = type === "TV" ? "anime" : type.toLowerCase();

				const genresType = genres.find((data) => data.name === "Hentai");
				const sensoreImage = genresType ? "card_image_nswf" : "card_image";

				return (
					<Link
						key={id}
						className="link"
						to={`/${isAnime}/selected/${ROUTE.id}/${id}`}
					>
						<Image
							className={sensoreImage}
							type={type}
							title={title}
							imageURL={image.webp.imageURL}
						/>

						<div className={`conteiner_info ${sensoreImage}`}>
							<strong>{title}</strong>
							<p>Score: {score}</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
