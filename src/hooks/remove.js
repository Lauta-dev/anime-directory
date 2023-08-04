import { useEffect, useState } from "react";
import { localHost } from "../../server/prefix";

export function useRemoveItem({ id }) {
	const [res, setRes] = useState();

	useEffect(() => {
		const a = async () => {
			try {
				const body = {
					method: "DELETE",
				};

				const f = await fetch(`${localHost}/${id}`, body);
				const res = await f.json();
				setRes(res);
			} catch (error) {
				throw new Error(`Error al eliminar el elemento ${error}`);
			}
		};

		a();
	}, []);

	return { res };
}
