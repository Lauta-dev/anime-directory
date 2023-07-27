import { useEffect, useState } from "react";
import { localHost } from "../../server/prefix";

export function useRemoveItem({ id }) {
	const [res, setRes] = useState();

	useEffect(() => {
		const a = async () => {
			try {
				const pe = {
					method: "DELETE",
				};
				console.log(id);

				const f = await fetch(`${localHost}/delete/${id}`, pe);

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
