import { saveData } from "../../server/prefix";

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

		const save = await fetch('http://localhost:8080/recurso/save', headers);
		const res = await save.json();
	  console.log({
      info,
      saveData,
      headers,
      res
    })

  } catch (error) {
		throw new Error(`Error al guardar los datos ${error}`);
	}
};
