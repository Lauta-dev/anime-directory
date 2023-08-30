import removeRow from "../../supabase/removeItem";
import "../css/buttonAddItemInDB.css";
import RemoveIcom from "../svg/remove";

export const RemoveItemFromDB = ({ id, oncheck }) => (
	<button
		className="globalStyle removeItem"
		type="button"
		onClick={() => {
			removeRow({ malId: id });
			oncheck();
		}}
	>
		Remove <RemoveIcom />
	</button>
);
