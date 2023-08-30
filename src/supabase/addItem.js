import supabase from "./supabase";

const insertRow = async ({ title, type, malId }) => {
	const dataOnInsert = {
		title,
		type,
		mal_id: malId,
	};

	const { error } = await supabase.from("animes").insert([dataOnInsert]);

	return { error };
};

export default insertRow;
