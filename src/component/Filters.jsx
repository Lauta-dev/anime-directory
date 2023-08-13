import { ActiveOrDesactiveNSFW } from "./ActiveOrDesactiveNSFW";
import { ChangeAnimeOrManga } from "./ChangeAnimeOrManga";
import { Genres } from "./Genres";
import { OrderBy } from "./OrderBy";
import { Rating } from "./Rating";
import { AnimeStatus } from "./animeStatus";

export default function Filters() {
	return (
		<>
			<ActiveOrDesactiveNSFW />
			<ChangeAnimeOrManga />
			<AnimeStatus />
			<Rating />
			<Genres />
      <OrderBy />
		</>
	);
}
