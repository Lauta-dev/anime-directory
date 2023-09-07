import authWithGoogle from "../../supabase/authWithGoogle";
import signOutForGoogle from "../../supabase/signOut";

import GoogleIcon from "../svg/GoogleIcon";
import ListIfExistSession from "./ListIfExistSession";

export const AuthComponent = ({ user }) => {
	const signOut = () => {
		signOutForGoogle();
	};

	const auth = () => {
		authWithGoogle();
	};

	return (
		<ul>
			{!user ? (
				<li>
					<button className="button_sign_in" onClick={auth}>
						Sign in with <GoogleIcon />
					</button>
				</li>
			) : (
				<ListIfExistSession signOut={signOut} />
			)}
		</ul>
	);
};
