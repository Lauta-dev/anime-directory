import { useEffect, useState } from "react";
import { Link } from "wouter";

import { ROUTE } from "../TYPES";
import { useGlobalInfo } from "../hooks/useAnimeSelected";
import { Image } from "./infoAnimeAndManga/Image";

import "./css/anime_card.css";

export function CardAnimeAndManga({ animeArray, pagination }) {
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

	const { last_visible_page, current_page, items } = pagination;
	const { count, total, per_page } = items;

	return (
		<>
			<h2>
				{current_page} from {last_visible_page} pages - items for page{" "}
				{per_page}
			</h2>
			<div className="cards">
				{selectedAnimeData?.map(({ globalInfo, image }) => {
					const { title, score, type, id } = globalInfo;
					const isAnime =
						type === "OVA" || type === "TV" ? "anime" : type.toLowerCase();

					return (
						<Link
							key={id}
							className="link"
							to={`/${isAnime}/${ROUTE.id}/${id}`}
						>
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
		</>
	);
}
