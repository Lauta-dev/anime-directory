import { useState } from "react";
import { useSaveInfoInDB } from "../../hooks/saveInfoInDB";

export const SaveMangaOrAnime = ({ info, e, c }) => {
	const handleChicl = () => useSaveInfoInDB({ info });

	return (
		<button
			type="button"
			onClick={() => {
				e(!c);
				return handleChicl();
			}}
		>
			save
		</button>
	);
};
