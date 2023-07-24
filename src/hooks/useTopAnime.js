import { useEffect, useState } from "react";
import { JIKAN_API_TOP } from "../const";

export function useTopAnime({ type }) {
	const [top, setTop] = useState([]);
	const nameTop = `top-${type}`;

	useEffect(() => {
		const getTop = async () => {
			if (localStorage.getItem(nameTop) !== null) {
				return setTop(JSON.parse(localStorage.getItem(nameTop)));
			}

			const res = await fetch(JIKAN_API_TOP({ type }));
			const data = await res.json();

			setTop(data.data);
			localStorage.setItem(nameTop, JSON.stringify(data.data));
		};

		getTop();
	}, [type]);

	return { top };
}
