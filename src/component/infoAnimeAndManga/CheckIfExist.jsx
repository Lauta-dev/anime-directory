import { RemoveItemFromDB } from "./RemoveItemFromDB";
import { SaveMangaOrAnime } from "./saveMangaOrAnime";
import { useIfExistElemetnInDB } from "../../hooks/ifExistElementInDB";

export function CheckIfExist({ id, infoMangaFormatter }) {
	const { malId, setMalId } = useIfExistElemetnInDB({ id });

	return (
		<>
			{malId.length ? (
				<RemoveItemFromDB oncheck={() => setMalId([])} id={id} />
			) : (
				<SaveMangaOrAnime
					oncheck={() => setMalId([id])}
					info={infoMangaFormatter}
				/>
			)}
		</>
	);
}
