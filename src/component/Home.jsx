import { Link } from "wouter";
import { FORMAT_TYPES } from "../TYPES";
import { useTopAnime } from "../hooks/useTopAnime";
import { AnimeCard } from "./TopAnimeCard";

import { getSeasonNow } from "../logic/getSeasonNow";

import "./css/changeMangaOrAnime.css";
import { useState } from "react";

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

				<Link to={`/${selectAnimeOrManga}/top/${selectAnimeOrManga}`}>
					More #{selectAnimeOrManga}
				</Link>
			</div>
			<br />

			<AnimeCard animeArray={top} isCharacterAnime={false} />
			<br />

			<ul className="season_conteiner">
				{data?.map((e) => {
					return (
						<Link key={e.mal_id} to={`/anime/selected/id/${e.mal_id}`}>
							<li className="list">
								<img className="img" src={e.images.jpg.image_url} alt="" />

								<div className="infoSeason">
									<b>{e.title}</b>
									<div className="detail">
										<p>
											Aired: <b>{e.aired.string}</b>
										</p>

										<p>
											Status: <b>{e.status}</b>
										</p>

										<p>
											Episodes: <b>{e.episodes ?? "?"}</b>
										</p>
									</div>
								</div>
							</li>
						</Link>
					);
				})}
				<Link to="/anime/selected/season">More </Link>
			</ul>
		</>
	);
}
