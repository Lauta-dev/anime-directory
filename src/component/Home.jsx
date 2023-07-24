import { Link } from "wouter";
import { FORMAT_TYPES } from "../TYPES";
import { useTopAnime } from "../hooks/useTopAnime";
import { AnimeCard } from "./TopAnimeCard";
import { useState } from "react";

export default function Home() {
	const [showMangaOrAnime, setShowMangaOrAnime] = useState(false);
	const { top } = useTopAnime({
		type: showMangaOrAnime ? FORMAT_TYPES.anime.type : FORMAT_TYPES.manga.type,
	});

	return (
		<>
			<label htmlFor="type">Mostrar anime</label>
			<input
				type="checkbox"
				name="type"
				id="type"
				onChange={() => setShowMangaOrAnime(!showMangaOrAnime)}
			/>

			<AnimeCard animeArray={top} isCharacterAnime={false} />
		</>
	);
}
