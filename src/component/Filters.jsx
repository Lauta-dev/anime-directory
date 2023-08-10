import { ActiveOrDesactiveNSFW } from "./ActiveOrDesactiveNSFW";
import { ChangeAnimeOrManga } from "./ChangeAnimeOrManga";
import Pages from "./Pages";

export default function Filters() {
	return (
		<section className="filters">
			<ActiveOrDesactiveNSFW />
			<ChangeAnimeOrManga />
			<Pages />
		</section>
	);
}
