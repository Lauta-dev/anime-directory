import { useContext, useState } from "react";
import { filtersContext } from "../context/filtersContext";
import { Select } from "./ChangeAnimeOrManga";

export function Rating() {
	const { filtersAll, setfiltersAll } = useContext(filtersContext);
	const rating = [
		{
			rating: "",
			description: "View all",
		},
		{
			rating: "g",
			description: "All Ages",
		},
		{
			rating: "gp",
			description: "Children",
		},
		{
			rating: "pg13",
			description: "Teens 13 or older",
		},
		{
			rating: "r17",
			description: "Violence & profanity",
		},
	];

	function handleChangeRating(data) {
		const rating = data.target.value;

		setfiltersAll((prev) => ({
			...prev,
			rating,
		}));
	}

	return (
		<>
			<Select id={"rating"} onChange={handleChangeRating}>
				{rating.map(({ rating, description }) => (
					<option value={rating} key={rating}>
						{description}
					</option>
				))}
			</Select>
		</>
	);
}
