import { localHost } from "../../server/prefix.js";

export async function removeItemFromDBLogic({ id }) {
	try {
		const body = {
			method: "DELETE",
		};

		const removeitem = await fetch(`${localHost}/${id}`, body);
		const res = await removeitem.json();

		console.log(res);

		return res;
	} catch (error) {
		throw new Error(`Error al eliminar el elemento ${error}`);
	}
}
