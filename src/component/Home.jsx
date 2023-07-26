import { Link } from "wouter";
import { FORMAT_TYPES } from "../TYPES";
import { useTopAnime } from "../hooks/useTopAnime";
import { AnimeCard } from "./TopAnimeCard";
import { useEffect, useState } from "react";

import { getSeasonNow } from "../logic/getSeasonNow";

import "./css/changeMangaOrAnime.css";

export default function Home() {
	const [showMangaOrAnime, setShowMangaOrAnime] = useState(false);
	const { seasonNow } = getSeasonNow();
	const data = seasonNow.data;

	const selectAnimeOrManga = showMangaOrAnime
		? FORMAT_TYPES.anime.type
		: FORMAT_TYPES.manga.type;

	const { top } = useTopAnime({
		type: selectAnimeOrManga,
	});

	return (
		<>
			<div className="conteiner-filters">
				<button
					className={`changeAnimeOrManga ${
						showMangaOrAnime ? "manga" : "anime"
					}`}
					onClick={() => {
						setShowMangaOrAnime(!showMangaOrAnime);
					}}
				>
					Show {showMangaOrAnime ? "manga" : "anime"}
				</button>

				<Link to={`/${selectAnimeOrManga}/top/${selectAnimeOrManga}`}>
					More #{selectAnimeOrManga}
				</Link>
			</div>

			<br />
			<br />

			<AnimeCard animeArray={top} isCharacterAnime={false} />

			{data?.map((e) => (
				<div key={e.mal_id}>
					<h2>{e.title}</h2>
				</div>
			))}
		</>
	);
}
