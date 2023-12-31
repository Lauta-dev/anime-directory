import insertRow from "../../supabase/addItem";
import "../css/buttonAddItemInDB.css";

export const SaveMangaOrAnime = ({ info, oncheck }) => {
	const { title, type, id } = info;

	return (
		<button
			className="globalStyle  addItem"
			type="button"
			onClick={() => {
				insertRow({ title, type, malId: id });
				oncheck();
			}}
		>
			Save{" "}
			<svg
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
	);
};
