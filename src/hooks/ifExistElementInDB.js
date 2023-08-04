import { useEffect, useState } from "react";
import { localHost } from '../../server/prefix.js'

export function useIfExistElemetnInDB({ id }) {
	const [check] = useState(false);
	const [malId, setMalId] = useState([]);

	const searchElement = async ({ id }) => {
		try {
			const body = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					id: id,
				}),
			};

			const f = await fetch(`${localHost}/${id}`, body);
			const res = await f.json();
			return res;
		} catch (error) {
			throw new Error(`No se puedo connectar a la base de datos, ${error}`);
		}
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
