import { useSaveInfoInDB } from "../../hooks/saveInfoInDB";
import "../css/buttonAddItemInDB.css";

export const SaveMangaOrAnime = ({ info, oncheck }) => {
  return <button
		className="globalStyle  addItem"
		type="button"
		onClick={() => {
			oncheck();
			useSaveInfoInDB({ info });
		}}
	>
		Save{" "}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="addIcon"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
	</button>
};
