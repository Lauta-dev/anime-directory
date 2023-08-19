import { Link } from "wouter";
import { Slice } from "./Slice";
import "./css/image.css";
import { ROUTE, newObjet } from "../TYPES";
import { formatGlobalInfo } from "../hooks/useAnimeSelected";
import { tipos } from "../const";
import { characterPaths } from "../Routers/paths";

function TopAnime({ animeArray }) {
  return (
    <Slice>
      {animeArray.map((data) => {
        const { image, globalInfo } = formatGlobalInfo({ data })
        const { id, title, type } = globalInfo
        const { webp } = image
        const isAnime = type === 'TV' ? newObjet.anime : type.toLowerCase()
        return (
          <Link key={id} to={`/${isAnime}/${ROUTE.id}/${id}`}>
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
      {animeArray.slice(0, 6).map((data) => {
        const { character } = data;
        const id = character.mal_id;
        const name = character.name.replaceAll(' ', '-').toLowerCase()
        return (
          <Link key={id} to={characterPaths({ name, id })}>
            <img
              className="imageCover"
              key={id}
              src={character.images.webp.image_url}
              alt={`Character: ${character.name}`}
            />
          </Link>
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
