import { createContext, useState } from "react";

/**
 *
 * @returns [filtersAll, setfiltersAll]
 */
export const filtersContext = createContext();

/*Necesito
-> status -> Enum: "airing" "complete" "upcoming"
-> rating
-> genres
-> genres_exclude
-> order_by
  Enum: ["mal_id" "title" "start_date" "end_date" "episodes" "score" "scored_by" "rank" "popularity" "members" "favorites"]

-> sort ---> Enum: "desc" "asc"

-> start_date ---> Format: YYYY-MM-DD
-> end_data ---> Format: YYYY-MM-DD

*/

/**
 *
 * @returns [filtersAll, setfiltersAll]
 */
export const FiltersContextProvider = ({ children }) => {
	const [filtersAll, setfiltersAll] = useState({
		status: "complete",
		rating: "g",
		genres: null,
		genres_exclude: null,
		order_by: "title",
		sort: "asc",
		start_date: null,
		end_data: null,
	});

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
