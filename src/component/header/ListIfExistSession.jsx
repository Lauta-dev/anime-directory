import IconComponent from "../svg/ExitIcon";

export default function ListIfExistSession({ signOut }) {
	return (
		<>
			<li>View list</li>
			<li>
				<button onClick={() => signOut()}>
					Exit <IconComponent />
				</button>
			</li>
		</>
	);
}
