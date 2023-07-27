import { useSaveInfoInDB } from "../../hooks/saveInfoInDB";

export const SaveMangaOrAnime = ({ info, oncheck }) => {
	const handleChicl = () => useSaveInfoInDB({ info });

	return (
		<button
			onClick={() => {
				oncheck();
				return handleChicl();
			}}
		>
			save
		</button>
	);
};
