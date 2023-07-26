export const useSaveInfoInDB = async ({ info }) => {
	const fetchResponse = {
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

	const f = await fetch("http://localhost:8080/save", fetchResponse);
	const res = await f.json();
};
