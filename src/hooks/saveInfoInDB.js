import { localHost } from "../../server/prefix";

export const useSaveInfoInDB = async ({ info }) => {
  try {
		const headers = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: info.title,
				id: info.id,
				type: info.type,
			}),
		};

		const save = await fetch(localHost, headers);
		const res = await save.json();

  } catch (error) {
		throw new Error(`Error al guardar los datos ${error}`);
	}
};
