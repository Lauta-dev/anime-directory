import supabase from "./supabase";

const signOutForGoogle = async () => {
	await supabase.auth.signOut();
};

export default signOutForGoogle;
