import supabase from "./supabase";

const authWithGoogle = () => {
	supabase.auth.signInWithOAuth({
		provider: import.meta.env.VITE_SUPABASE_PROVIDER_GOOGLE,
		options: {
			redirectTo: "/",
		},
	});
};

export default authWithGoogle;
