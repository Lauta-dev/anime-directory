import { useEffect, useState } from "react";
import supabase from "./supabase";

/**
 * @returns session {
 *   error,
 *   session
 * }
 */
export const useGetUser = () => {
	const [session, useSession] = useState(null);

	useEffect(() => {
		const getUser = async () => {
			const {
				error,
				data: { user },
			} = await supabase.auth.getUser();

			if (error) {
				useSession(error);
				return;
			}

			const userId = user?.identities[0]?.user_id;

			useSession({
				user,
				miData: {
					userId,
				},
			});
		};

		getUser();
	}, []);

	return { session };
};
