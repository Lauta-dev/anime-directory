import { removeItemFromDBLogic } from "../../logic/removeItemFromDBLogic";
import "../css/buttonAddItemInDB.css";
import RemoveIcom from "../svg/remove";

export const RemoveItemFromDB = ({ id, oncheck }) => (
	<button
		className="globalStyle removeItem"
		type="button"
		onClick={() => {
			oncheck();
			removeItemFromDBLogic({ id });
		}}
	>
		Remove <RemoveIcom />
	</button>
);
