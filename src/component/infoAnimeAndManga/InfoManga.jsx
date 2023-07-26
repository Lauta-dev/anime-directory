import { useInfoManga } from "../../hooks/infoManga";
import { Image } from "./Image";
import { InfoMangaAndAnime } from "./Information";
import { Status } from "./Status";
import { Synopsis } from "./Synopsis";
import { Titles } from "./Title";

import { FORMAT_TYPES } from "../../TYPES";
import { useAnimeCharacter } from "../../hooks/useAnimeCharacter";
import "../css/animeID.css";
import { Characters } from "./Characters";
import { SaveMangaOrAnime } from "./saveMangaOrAnime";
import { useEffect, useState } from "react";
import { RemoveItemFromDB } from "./RemoveItemFromDB";

export function InfoManga({ infoManga, image, titles }) {
	const [malId, setMalId] = useState(0);
	const [changeButton, setChangeButton] = useState(false);

	const { infoMangaFormatter } = useInfoManga({ data: infoManga });
	const { getAnimeCharacters } = useAnimeCharacter({
		id: infoMangaFormatter.id,
		type: FORMAT_TYPES.manga.type,
	});

	useEffect(() => {
		const fetchResponse = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: infoMangaFormatter.id,
			}),
		};

		fetch(
			`http://localhost:8080/data/${infoMangaFormatter.id}`,
			fetchResponse,
		).then((res) => res.json().then((res) => console.log(res)));
	}, [changeButton]);

	console.log(changeButton);

	return (
		<section className="conteiner">
			<Image
				type={infoManga.type}
				title={infoManga.title}
				imageURL={image.jpg.imageURL}
			/>

			{malId > 0 ? (
				<RemoveItemFromDB
					c={changeButton}
					s={setChangeButton}
					id={infoMangaFormatter.id}
				/>
			) : (
				<SaveMangaOrAnime
					c={changeButton}
					e={setChangeButton}
					info={infoMangaFormatter}
				/>
			)}

			<Titles titles={titles} />

			<InfoMangaAndAnime
				popularity={infoMangaFormatter.popularity}
				chapters={infoMangaFormatter.chapters}
				status={infoMangaFormatter.status}
				score={infoMangaFormatter.score}
				type={infoMangaFormatter.type}
			/>
			<Synopsis genres={infoManga.genres} synopsis={infoManga.synopsis} />
			<Status
				status={infoMangaFormatter.status}
				aired={infoMangaFormatter.publishing}
			/>
			<Characters getAnimeCharacters={getAnimeCharacters} />
		</section>
	);
}
