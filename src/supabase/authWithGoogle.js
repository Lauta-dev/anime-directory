import supabase from "./supabase";

const authWithGoogle = async () => {
	await supabase.auth.signInWithOAuth({
		provider: import.meta.env.VITE_SUPABASE_PROVIDER_GOOGLE,
		options: {
			redirectTo: window.location.origin,
		},
	});
};

export default authWithGoogle;
