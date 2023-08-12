import { Link } from "wouter";
import { getSeasonNow } from "../logic/getSeasonNow";
import { animeSeasonPath, seasonAnimeId } from "../Routers/paths";

import './css/season_loader.css'
import './css/season.css'
import { HeaderSectionHome } from "./HeaderSectionHome";


export function Season() {
	const { seasonNow } = getSeasonNow();
	const data = seasonNow?.data;

	return (
		<>
			<ul className="season_conteiner">
        {data === undefined ? (
        <>
          <li className="season_loader"></li>
          <li className="season_loader"></li>
          <li className="season_loader"></li>
          <li className="season_loader"></li>
          <li className="season_loader"></li>
          <li className="season_loader"></li>
        </>
        ) : (
          <>
              <li>
                <HeaderSectionHome value={'this season'} path={animeSeasonPath} />
              </li>
              {data?.map((e) => {
                return (
							    <li key={e.mal_id} className="list">
                    <Link to={seasonAnimeId(e.mal_id)}>
                      <img className="img" src={e.images.webp.image_url} alt="" />
                      <section className="infoSeason">
                        <b>{e.title}</b>
                        <section className="detail">
                          <p>Status: <b>{e.status}</b></p>
							      		  <p>Episodes: <b>{e.episodes ?? "?"}</b></p>
									      </section>
								      </section>
                    </Link>
							    </li>
					    );})}
          </> 
        )}
			</ul>
		</>
	);
}
