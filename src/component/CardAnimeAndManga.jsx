import { useState } from "react";
import { Link } from "wouter";

import { ROUTE } from "../TYPES";
import { formatGlobalInfo } from "../hooks/useAnimeSelected";

import "./css/anime_card.css";
import Pages from "./Pages";
import Filters from "./Filters";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { tipos } from "../const";

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
          const { title, type, id } = globalInfo;
          const isAnime =
            type === "OVA" || type === "TV" ? "anime" : type.toLowerCase();

          return (
            <Link
              key={id}
              className="link"
              to={`/${isAnime}/${ROUTE.id}/${id}`}>
              <LazyLoadImage className="card_image" alt={tipos(type, title)} src={image.webp.imageURL} />

              <section className="conteiner_info">
                <b>{title}</b>
              </section>
            </Link>
          );
        })}
      </div>
    </>
  );
}
