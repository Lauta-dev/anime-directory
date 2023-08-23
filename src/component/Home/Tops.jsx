import { useContext, useEffect, useState } from "react";
import { Season } from "../Season";
import { Slice } from "../Slice";
import { AnimeCard } from "../TopAnimeCard";
import { HeaderSectionHome } from "../HeaderSectionHome";
import { FORMAT_TYPES } from "../../TYPES";
import { SelectAnimeOrMangaContext } from "../../context/selectAnimeOrManga";
import { useTop } from "../../hooks/useTopAnime";

import "../css/changeMangaOrAnime.css";
import "../css/loadingTop.css";

function Select({ set }) {
	const types = Object.values(FORMAT_TYPES);
	function type(e) {
		set(e.target.value);
	}

	const style = {
		border: "none",
		backgroundColor: "transparent",
	};

	document.title = "Anime Directory";

	return (
		<select style={style} onChange={type}>
			{types.map(({ id, type }) => (
				<option key={id} value={type}>
					{type.toUpperCase()}{" "}
				</option>
			))}
		</select>
	);
}

export default function Tops() {
	const [showMangaOrAnime, setShowMangaOrAnime] = useState("anime");
	const { setType } = useContext(SelectAnimeOrMangaContext);

	useEffect(() => setType(showMangaOrAnime), [showMangaOrAnime]);

	const { top } = useTop({ topInHome: 6 });

	const loadingTop = top.data?.length;
	const data = top.data;

	return (
		<section style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
			{loadingTop ? (
				<>
					<HeaderSectionHome
						value={`top`}
						select={<Select set={setShowMangaOrAnime} />}
						path={`/${showMangaOrAnime}/top/`}
					/>
					<AnimeCard animeArray={data} isCharacterAnime={false} />
				</>
			) : (
				<Slice>
					<div className="loading_top"></div>
					<div className="loading_top"></div>
					<div className="loading_top"></div>
					<div className="loading_top"></div>
					<div className="loading_top"></div>
					<div className="loading_top"></div>
				</Slice>
			)}
			<Season />
		</section>
	);
}
