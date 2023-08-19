import { Loading } from "../Loading";
import { AnimeCard } from "../TopAnimeCard";

import "../css/loading.css";
import { HeaderSectionHome } from "../HeaderSectionHome";
import { useLocation } from "wouter";

export function Characters({ getAnimeCharacters }) {
  const [location] = useLocation()

	return (
		<>
			<section className="base">
        <HeaderSectionHome path={`${location}/allcharacters`} value={'Character'} />

				{getAnimeCharacters?.length ? (
					<AnimeCard isCharacterAnime animeArray={getAnimeCharacters} />
				) : (
					<Loading />
				)}
			</section>
		</>
	);
}
