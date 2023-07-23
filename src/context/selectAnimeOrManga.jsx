import { createContext, useState } from "react";
import { FORMAT_TYPES } from "../TYPES";

export const SelectAnimeOrMangaContext = createContext();

export const SelectAnimeOrMangaContextProvider = ({ children }) => {
	const [type, setType] = useState(FORMAT_TYPES.anime.type.toString());

	return (
		<SelectAnimeOrMangaContext.Provider
			value={{
				type,
				setType,
			}}
		>
			{children}
		</SelectAnimeOrMangaContext.Provider>
	);
};
