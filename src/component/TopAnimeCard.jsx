import { Link } from "wouter";
import { Slice } from "./Slice";
import "./css/image.css";
import { ROUTE } from "../TYPES";
import { formatGlobalInfo } from "../hooks/useAnimeSelected";
import { tipos } from "../const";

function TopAnime({ animeArray }) {
  return (
    <Slice>
      {animeArray.map((data) => {
        const { image, globalInfo } = formatGlobalInfo({ data })
        const { id, title, type } = globalInfo
        const { webp } = image

        return (
          <Link key={id} to={`/anime/${ROUTE.id}/${id}`}>
            <img
              className="imageCover"
              src={webp.imageURL}
              alt={tipos(type, title, id)}
            />
          </Link>
        )
      })}
    </Slice>
  );
}

function AnimeCharacter({ animeArray }) {
  return (
    <Slice>
      {animeArray.map((data) => {
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
