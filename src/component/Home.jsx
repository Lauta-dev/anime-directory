import { Link } from "wouter";
import { FORMAT_TYPES } from "../TYPES";
import { useTop } from "../hooks/useTopAnime";
import { AnimeCard } from "./TopAnimeCard";

import { useState } from "react";
import "./css/changeMangaOrAnime.css";
import { Season } from "./Season";

export default function Home() {
	const [showMangaOrAnime, setShowMangaOrAnime] = useState(false);

	const selectAnimeOrManga = showMangaOrAnime
		? FORMAT_TYPES.anime.type
		: FORMAT_TYPES.manga.type;

	const { top } = useTop({
		type: selectAnimeOrManga,
	});

	document.title = "Home";

	return (
		<>
			<div className="toggle_manga_or_anime">
				<button
					type="button"
					className={`changeAnimeOrManga ${
						showMangaOrAnime ? "manga" : "anime"
					}`}
					onClick={() => {
						setShowMangaOrAnime(!showMangaOrAnime);
					}}
				>
					Show {showMangaOrAnime ? "manga" : "anime"}
				</button>

				<Link to={`/${selectAnimeOrManga}/top`}>View all </Link>
			</div>
			<br />

			<AnimeCard animeArray={top} isCharacterAnime={false} />

			<br />

			<Season />
		</>
	);
}
