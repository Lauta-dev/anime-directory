import { useEffect, useState } from "react";
import supabase from "./supabase";

export const useGetUser = () => {
	const [session, useSession] = useState({});

	useEffect(() => {
		supabase.auth.getUser().then(({ data, error }) => {
			if (error) {
				return useSession({ error });
			}

			const user = data.user;
			const userId = user.id;

			useSession({
				user,
				miData: {
					userId,
				},
			});
		});
	}, []);

	console.log(session);

	return { session };
};
