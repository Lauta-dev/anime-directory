import { useEffect, useState } from "react";
import supabase from "../supabase/supabase.js";

export function useIfExistElemetnInDB({ id }) {
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
			setMalId(data);
		}

		checkIfExistElement();
	}, [check]);

	return { malId, setMalId, check, setCheck };
}
