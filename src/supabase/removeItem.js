import supabase from "./supabase";

const removeRow = async ({ malId }) => {
	const { error } = await supabase.from("animes").delete().eq("mal_id", malId);

	return { error };
};

export default removeRow;
