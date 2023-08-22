import { useEffect, useState } from "react";

export const getDataFromDB = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const getItems = async () => {
			try {
				const body = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
				};
				const res = await fetch("http://localhost:8080/all", body);
				const ok = res.ok; // <-- devuelve TRUE si la respuesta es exitosa

				if (!ok) {
					const error = {
						messaje: "not fount",
						errorCode: res.status,
					};

					return setData(error);
				}

				const json = await res.json();
				return setData(json);
			} catch (error) {
				throw new Error(error);
			}
		};

		getItems();
	}, []);

	return { data };
};
