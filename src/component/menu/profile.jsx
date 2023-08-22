import { useEffect, useState } from "react";

import "../css/table.css";
import { localHost } from "../../../server/prefix.js";
import ListItems from "./Table";

const Profile = () => {
	const [item, setItem] = useState(null);
	const [se, setSe] = useState(true);
	const [btn, setBtn] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

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

				setLoading(true);

				return setError(error);
			}

			const json = await res.json();

			setError(null);
			setItem(json);
			setLoading(true);
		} catch (error) {
			throw new Error(error);
		}
	};

	useEffect(() => {
		getItems();
	}, []);

	const hadleType = () => {
		setSe(!se);
		se
			? setItem((prev) =>
					prev.sort((a, b) => {
						const aOption = a.type.toUpperCase();
						const bOption = b.type.toUpperCase();

						if (aOption < bOption) return 1;
						if (aOption > bOption) return -1;
					}),
			  )
			: setItem((prev) =>
					prev.sort((a, b) => {
						const aOption = a.type.toUpperCase();
						const bOption = b.type.toUpperCase();

						if (aOption > bOption) return 1;
						if (aOption < bOption) return -1;
					}),
			  );
	};

	const changeTitle = () => {
		setSe(!se);
		se
			? setItem((prev) =>
					prev.sort((a, b) => {
						const aOption = a.anime_name.toUpperCase();
						const bOption = b.anime_name.toUpperCase();

						if (aOption < bOption) return 1;
						if (aOption > bOption) return -1;
					}),
			  )
			: setItem((prev) =>
					prev.sort((a, b) => {
						const aOption = a.anime_name.toUpperCase();
						const bOption = b.anime_name.toUpperCase();

						if (aOption > bOption) return 1;
						if (aOption < bOption) return -1;
					}),
			  );
	};

	async function removeFromDataBase({ id }) {
		try {
			const body = {
				method: "DELETE",
			};

			const res = await fetch(`${localHost}/${id}`, body);
			const ok = res.ok;

			if (!ok) return console.log("asd");
			const json = await res.json();

			if (json.message) {
				setBtn(true);
				setTimeout(() => {
					getItems();
					setBtn(false);
				}, 1000);
			}
		} catch (error) {
			throw new Error(`Error al eliminar el elemento ${error}`);
		}
	}

	return (
		<>
			{!loading && !error && <h2>Cargando</h2>}
			{loading && error ? JSON.stringify(error) : null}

			{item?.length && !error && loading && (
				<ListItems
					btn={btn}
					changeTitle={changeTitle}
					data={item}
					hadleType={hadleType}
					removeFromDataBase={removeFromDataBase}
				/>
			)}
		</>
	);
};
export default Profile;
