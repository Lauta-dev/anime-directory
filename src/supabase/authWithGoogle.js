import supabase from "./supabase";

const authWithGoogle = async () => {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			redirectTo: window.location.origin,
		},
	});
};

export default authWithGoogle;
