import { useState } from "react";
import { Link } from "wouter";

import { ROUTE } from "../TYPES";
import { formatGlobalInfo } from "../hooks/useAnimeSelected";
import { Image } from "./infoAnimeAndManga/Image";

import "./css/anime_card.css";
import Pages from "./Pages";
import Filters from "./Filters";

export function CardAnimeAndManga({ animeArray, pagination }) {
  const [showFilters, setShowFilters] = useState(false)

  if (animeArray === null || animeArray === undefined) return <b>Loading...</b>
  const newArray = animeArray.map(data => formatGlobalInfo({ data }))

	return (
		<>
      <button type="button" onClick={() => setShowFilters(!showFilters)}>Show filters</button> 
      {showFilters && <Filters />}

			<Pages pagination={pagination} />

			<div className="cards">
				{newArray.map(({ globalInfo, image }) => {
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
