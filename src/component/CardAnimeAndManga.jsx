import { useEffect, useState } from "react";
import { Link } from "wouter";

import { ROUTE } from "../TYPES";
import { useGlobalInfo } from "../hooks/useAnimeSelected";
import { Image } from "./infoAnimeAndManga/Image";

import "./css/anime_card.css";
import Pages from "./Pages";

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

	return (
		<>
			<br />
			<b>
				{pagination?.current_page} from {pagination?.last_visible_page} pages{" "}
				<br />
				{pagination?.items?.per_page} items for page
			</b>
			<br />

			<Pages pagination={pagination} />

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
								<div>
									<p>Score: {score}</p>
									<p>Type: {type}</p>
								</div>
							</section>
						</Link>
					);
				})}
			</div>
		</>
	);
}
