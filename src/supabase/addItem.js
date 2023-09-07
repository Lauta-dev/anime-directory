import supabase from "./supabase";

const insertRow = async ({ title, type, malId }) => {
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const dataOnInsert = {
		title,
		type,
		mal_id: malId,
		user_id: user.identities[0].user_id,
	};

	await supabase.from("items").insert([dataOnInsert]);
};

export default insertRow;
