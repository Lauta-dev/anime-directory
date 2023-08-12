import { useTop } from "../hooks/useTopAnime";
import { AnimeCard } from "./TopAnimeCard";

import { useContext, useState } from "react";
import { Season } from "./Season";
import { Slice } from "./Slice";

import "./css/changeMangaOrAnime.css";
import "./css/loadingTop.css";
import { HeaderSectionHome } from "./HeaderSectionHome";
import { SelectAnimeOrMangaContext } from "../context/selectAnimeOrManga";
import { FORMAT_TYPES } from "../TYPES";

function Select ({ set }) {
  const types = Object.values(FORMAT_TYPES)
  function type (e) {
    set(e.target.value)
  }

  return (
    <select onChange={type}>
      {types.map(({ id, type }) => (
        <option key={id} value={type}> {type.toUpperCase()} </option>
      ))}
    </select>
  )
}

export default function Home() {
	const [showMangaOrAnime, setShowMangaOrAnime] = useState('anime');
	const { setType } = useContext(SelectAnimeOrMangaContext);
  setType(showMangaOrAnime)

	const { top } = useTop({
		type: showMangaOrAnime,
	});

	document.title = "Home";

  const loadingTop = top.data?.length
  const data = top.data
  
  return (
    <section style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
      
      {loadingTop ? (
        <>
          <HeaderSectionHome
            value={`top`}
            select={<Select set={setShowMangaOrAnime} />}
            path={`/${showMangaOrAnime}/top`}
          />
			    <AnimeCard
            animeArray={data}
            isCharacterAnime={false}
          />
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
