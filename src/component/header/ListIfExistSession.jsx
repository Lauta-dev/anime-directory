import IconComponent from "../svg/ExitIcon";

export default function ListIfExistSession() {
	return (
		<>
			<li>View list</li>
			<li>
				<button>
					Exit <IconComponent />
				</button>
			</li>
		</>
	);
}
