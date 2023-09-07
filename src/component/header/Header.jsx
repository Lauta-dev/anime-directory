import "../css/header.css";
import { useGetUser } from "../../supabase/getUser";
import { A } from "./a";

export function Header() {
	const { session } = useGetUser();

	const user = session?.user;

	return <A user={user} />;
}
