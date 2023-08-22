import { useEffect, useState } from "react";

import "../css/table.css";
import { Link } from "wouter";
import { localHost } from "../../../server/prefix.js";

const ListItems = ({
	data,
	changeTitle,
	hadleType,
	btn,
	removeFromDataBase,
}) => {
	return (
		<table width={"100%"}>
			<thead>
				<th onClick={changeTitle}>Title</th>
				<th onClick={hadleType}>Type</th>
				<th>Remove</th>
			</thead>
			<tbody>
				{data?.map((data) => {
					const title = data.anime_name;
					const isAnime =
						data.type === "TV" ? "anime" : data.type.toLowerCase();

					return (
						<tr key={data.id}>
							<td className="row title">
								<Link to={`/${isAnime}/id/${data.mal_id}`}>{title}</Link>
							</td>
							<td className="row">{data.type}</td>
							<td className="row">
								{btn ? (
									<button
										disabled
										onClick={() => removeFromDataBase({ id: data.mal_id })}
									>
										Remove
									</button>
								) : (
									<button
										onClick={() => removeFromDataBase({ id: data.mal_id })}
									>
										Remove
									</button>
								)}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

const getDataFromDB = async ({ setData }) => {
	const body = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	};

	try {
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
		setData(json);
	} catch (error) {
		throw new Error(error);
	}
};

const Profile = () => {
	const [data, setData] = useState(null);
	const [se, setSe] = useState(true);
	const [btn, setBtn] = useState(false);

	useEffect(() => {
		getDataFromDB({ setData });
	}, []);

	const changeMalId = async () => {
		/*
		const body = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				data: se ? "ASC" : "DESC",
			}),
		};

		const red = await fetch("http://localhost:8080/orderby", body);
		const json = await red.json();
		setData(json);
		setSe(!se);
    */

		// console.log(a.sort((a, b) => a.mal_id - b.mal_id))

		setSe(!se);
		se
			? setData((prev) => prev.sort((a, b) => a.id - b.id))
			: setData((prev) => prev.sort((a, b) => b.id - a.id));
	};

	const hadleType = () => {
		setSe(!se);
		se
			? setData((prev) =>
					prev.sort((a, b) => {
						const aOption = a.type.toUpperCase();
						const bOption = b.type.toUpperCase();

						if (aOption < bOption) return 1;
						if (aOption > bOption) return -1;
					}),
			  )
			: setData((prev) =>
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
			? setData((prev) =>
					prev.sort((a, b) => {
						const aOption = a.anime_name.toUpperCase();
						const bOption = b.anime_name.toUpperCase();

						if (aOption < bOption) return 1;
						if (aOption > bOption) return -1;
					}),
			  )
			: setData((prev) =>
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

			await fetch(`${localHost}/${id}`, body);
		} catch (error) {
			throw new Error(`Error al eliminar el elemento ${error}`);
		}

		setBtn(true);
		setTimeout(() => {
			getDataFromDB({ setData });
			setBtn(false);
		}, 1000);
	}

	return (
		<>
			{data?.length ? (
				<ListItems
					btn={btn}
					changeTitle={changeTitle}
					data={data}
					hadleType={hadleType}
					removeFromDataBase={removeFromDataBase}
				/>
			) : (
				<>
					<h2>adssa</h2>
				</>
			)}
		</>
	);
};
export default Profile;
