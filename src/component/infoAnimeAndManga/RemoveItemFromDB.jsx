import { useState } from "react";
import { localHost } from "../../../server/prefix";

export const RemoveItemFromDB = ({ id, c, s }) => {
	async function a() {
		try {
			const pe = {
				method: "DELETE",
			};

			const f = await fetch(`${localHost}/delete/${id}`, pe);
			const res = await f.json();
		} catch (error) {
			throw new Error(`Error al eliminar el elemento ${error}`);
		}
	}

	return (
		<button
			type="button"
			onClick={() => {
				s(!c);
				return a();
			}}
		>
			remove
		</button>
	);
};
