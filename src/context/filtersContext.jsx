import { createContext, useState } from "react";

/**
 *
 * @returns [filtersAll, setfiltersAll]
 */
export const filtersContext = createContext();

export const FiltersContextProvider = ({ children }) => {
	const [filtersAll, setfiltersAll] = useState(
		localStorage.getItem("filtersAll")
			? JSON.parse(localStorage.getItem("filtersAll"))
			: {
					status: "",
					rating: "",
					genres: null,
					genresExclude: null,
					orderBy: "",
					sort: "",
					startDate: null,
					endData: null,
			  },
	);

	return (
		<filtersContext.Provider
			value={{
				filtersAll,
				setfiltersAll,
			}}
		>
			{children}
		</filtersContext.Provider>
	);
};
