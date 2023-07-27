export const useSaveInfoInDB = async ({ info }) => {
	try {
		const body = {
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

		const saveData = await fetch("http://localhost:8080/save", body);
		const res = await saveData.json();
	} catch (error) {
		throw new Error(`Error al guardar los datos ${error}`);
	}
};
