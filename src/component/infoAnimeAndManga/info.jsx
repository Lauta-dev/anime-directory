import { Characters } from "./Characters";
import { CheckIfExist } from "./CheckIfExist";
import { Genres } from "./Genres";
import { Image } from "./Image";
import { Synopsis } from "./Synopsis";
import { Titles } from "./Title";

export function Info({
	children,
	type,
	title,
	id,
	infoFormatter,
	titles,
	genres,
	synopsis,
	caracters,
	image,
}) {
	return (
		<>
			<Image type={type} title={title} imageURL={image.jpg.largeImageURL} />
			<CheckIfExist id={id} infoMangaFormatter={infoFormatter} />
			<Titles titles={titles} />
			{children}
			<Genres genres={genres} />
			<Synopsis synopsis={synopsis} />
			<Characters getAnimeCharacters={caracters} />
		</>
	);
}
