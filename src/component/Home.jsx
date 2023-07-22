import { Link } from "wouter";
import { FORMAT_TYPES } from "../TYPES";
import { useTopAnime } from "../hooks/useTopAnime";
import { useTopManga } from "../hooks/useTopManga";
import { AnimeCard } from "./TopAnimeCard";

export default function Home() {
	const { topAnime } = useTopAnime();
	const { topManga } = useTopManga();

	return (
		<>
			<Link to={`/${FORMAT_TYPES.anime}/top`}>Top Animes +</Link>
			<AnimeCard animeArray={topAnime} isCharacterAnime={false} />
			<br />
			<Link to={`/${FORMAT_TYPES.manga}/top`}>Top Mangas +</Link>
			<AnimeCard animeArray={topManga} isCharacterAnime={false} />
		</>
	);
}
