import supabase from "../../supabase/supabase";
import { RemoveItemFromDB } from "./RemoveItemFromDB";
import { SaveMangaOrAnime } from "./saveMangaOrAnime";
import { useEffect, useState } from "react";

export function CheckIfExist({ id, infoMangaFormatter }) {
	const [check, setCheck] = useState(false);
	const [malId, setMalId] = useState(null);

	useEffect(() => {
		const searchElement = async ({ id }) => {
			let { data: animes, error } = await supabase
				.from("animes")
				.select("*")
				.eq("mal_id", id);

			return { animes, error };
		};

		async function checkIfExistElement() {
			const check = searchElement({ id });
			const data = await check;

			console.log({ data });
			setMalId(data);
		}

		checkIfExistElement();
	}, [check]);

	return (
		<>
			{malId?.animes?.length ? (
				<RemoveItemFromDB oncheck={() => setCheck(!check)} id={id} />
			) : (
				<SaveMangaOrAnime
					oncheck={() => setCheck(!check)}
					info={infoMangaFormatter}
				/>
			)}
		</>
	);
}
