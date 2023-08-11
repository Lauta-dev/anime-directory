import { useContext } from "react";
import { Select } from "./ChangeAnimeOrManga";
import { filtersContext } from "../context/filtersContext";

export function OrderBy() {
  const { filtersAll, setfiltersAll } = useContext(filtersContext);

  const order = [
    "",
		"mal_id",
		"title",
		"start_date",
		"end_date",
		"episodes",
		"score",
		"scored_by",
		"rank",
		"popularity",
		"members",
		"favorites",
	];

  function handleChangeOrderBy (data) {
		const orderBy = data.target.value;
    setfiltersAll(prev => ({
      ...prev,
      orderBy
    }))
  }

	return (
		<Select id={'order_by'} onChange={handleChangeOrderBy}>
			{order.map((data) => (
				<option key={data} value={data}>{data.toUpperCase()}</option>
			))}
		</Select>
	);
}
