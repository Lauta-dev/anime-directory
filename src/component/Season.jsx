import { Link } from "wouter";
import { getSeasonNow } from "../logic/getSeasonNow";
import { animeSeasonPath, seasonAnimeId } from "../Routers/paths";

export function Season() {
	const { seasonNow } = getSeasonNow();
	const data = seasonNow.data;

	return (
		<>
			<ul className="season_conteiner">
				{data?.map((e) => {
					return (
						<Link key={e.mal_id} to={seasonAnimeId(e.mal_id)}>
							<li className="list">
								<img className="img" src={e.images.jpg.image_url} alt="" />

								<div className="infoSeason">
									<b>{e.title}</b>
									<div className="detail"></div>
								</div>
							</li>
						</Link>
					);
				})}
				<Link to={animeSeasonPath}>More</Link>
			</ul>
		</>
	);
}
