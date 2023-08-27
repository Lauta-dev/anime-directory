import { useEffect, useState } from "react";
import supabase from "./supabase";

/**
 * @returns session {
 *   error,
 *   session
 * }
 */
export const useGetSession = () => {
	const [session, useSession] = useState(null);
	const [connect, useConnect] = useState(false);

	useEffect(() => {
		const getSession = async () => {
			const {
				error,
				data: { session },
			} = await supabase.auth.getSession();

			useSession({
				error,
				session,
			});
		};

		getSession();
	}, [connect]);

	return { session, useConnect, connect };
};
