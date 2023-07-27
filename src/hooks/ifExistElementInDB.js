import { useEffect, useState } from "react";

export function useIfExistElemetnInDB({ id }) {
	const [check] = useState(false);
	const [malId, setMalId] = useState([]);

	const searchElement = async ({ id }) => {
		const body = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: id,
			}),
		};

		const f = await fetch(`http://localhost:8080/data/${id}`, body);
		const res = await f.json();
		return res;
	};

	useEffect(() => {
		async function checkIfExistElement() {
			const check = searchElement({ id });
			const data = await check;
			setMalId(data.length ? [id] : []);
		}

		checkIfExistElement();
	}, [check]);

	return { malId, setMalId };
}
