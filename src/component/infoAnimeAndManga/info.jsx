import { Characters } from "./Characters";
import { CheckIfExist } from "./CheckIfExist";
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
			<Image type={type} title={title} imageURL={image.jpg.imageURL} />
			<CheckIfExist id={id} infoMangaFormatter={infoFormatter} />
			<Titles titles={titles} />
			{children}
			<Synopsis genres={genres} synopsis={synopsis} />
			<Characters getAnimeCharacters={caracters} />
		</>
	);
}
