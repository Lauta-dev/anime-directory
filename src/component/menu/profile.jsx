import { useEffect, useState, lazy } from "react";
import supabase from "../../supabase/supabase";
import "../css/table.css";
import { useGetUser } from "../../supabase/getUser";
import { webPage } from "../../metadata";

const ListItems = lazy(() => import("./Table.jsx"));

const Profile = () => {
	const { session } = useGetUser();
	const [us, setUs] = useState(null);

	if (session?.name) {
		return (window.location.href = webPage.origin);
	}

	useEffect(() => {
		const selectRowForUsers = async () => {
			const { data: animes, error } = await supabase
				.from("items")
				.select("*, users(*)")
				.eq("user_id", session?.miData?.userId);

			setUs({ animes, error });
		};

		if (!session || session?.name) return;

		selectRowForUsers();
	}, [session]);

	return (
		<>
			{session && !us?.error && <ListItems data={us?.animes} />}
			{us?.error && JSON.stringify(us)}
		</>
	);
};
export default Profile;
