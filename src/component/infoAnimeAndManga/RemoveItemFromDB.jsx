import { removeItemFromDBLogic } from "../../logic/removeItemFromDBLogic";

export const RemoveItemFromDB = ({ id, oncheck }) => {
	return (
		<button
			onClick={() => {
				oncheck();
				removeItemFromDBLogic({ id });
			}}
		>
			remove
		</button>
	);
};
