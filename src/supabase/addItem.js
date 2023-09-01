import supabase from "./supabase";

const insertRow = async ({ title, type, malId }) => {
	const dataOnInsert = {
		title,
		type,
		mal_id: malId,
	};

	const { error, data, count, status, statusText } = await supabase
		.from("items")
		.insert([dataOnInsert]);

	console.log({ error, data, count, status, statusText });

	return { error };
};

export default insertRow;
