import { useEffect, useState } from "react";
import { ROUTE } from "../TYPES";
import { useGlobalInfo } from "../hooks/useAnimeSelected";
import { Image } from "./infoAnimeAndManga/Image";

import { Link } from "wouter";

import "./css/anime_card.css";

export function CardAnimeAndManga({ animeArray }) {
	const [selectedAnimeData, setSelectedAnimeData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const animeData = await Promise.all(
				animeArray?.map((data) => useGlobalInfo({ data })),
			);
			setSelectedAnimeData(animeData);
		};
		fetchData();
	}, [animeArray]);

	return (
		<div className="cards">
			{selectedAnimeData?.map(({ globalInfo, image }) => {
        console.log(globalInfo)
				const { title, score, type, id } = globalInfo;

				const isAnime =
					type === "OVA" || type === "TV" ? "anime" : type.toLowerCase();

				return (
					<Link key={id} className="link" to={`/${isAnime}/${ROUTE.id}/${id}`}>
						<Image
							className="card_image"
							type={type}
							title={title}
							imageURL={image.webp.imageURL}
						/>

						<section className="conteiner_info">
							<strong>{title}</strong>

							<p>Score: {score}</p>
							<p>Type: {type}</p>
						</section>
					</Link>
				);
			})}
		</div>
	);
}
