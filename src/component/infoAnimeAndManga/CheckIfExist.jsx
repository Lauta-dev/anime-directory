import { useGetUser } from "../../supabase/getUser";
import supabase from "../../supabase/supabase";
import { RemoveItemFromDB } from "./RemoveItemFromDB";
import { SaveMangaOrAnime } from "./saveMangaOrAnime";
import { useEffect, useState } from "react";

export function CheckIfExist({ id, infoMangaFormatter }) {
	const [check, setCheck] = useState(false);
	const [malId, setMalId] = useState(null);
	const { session } = useGetUser();

	useEffect(() => {
		const userId = session?.miData?.userId;

		const searchElement = async () => {
			let { data: animes, error } = await supabase
				.from("items")
				.select("*")
				.eq("mal_id", id)
				.eq("user_id", userId);
			setMalId({ animes, error });
		};

		searchElement();
	}, [session]);

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
