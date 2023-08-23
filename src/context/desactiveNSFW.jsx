import { createContext, useState } from "react";

export const desactiveNSFWContext = createContext();

export default function DesactiveNSFWPovider({ children }) {
	const [nsfw, setNsfw] = useState({
		sfw: true,
		page: 1,
	});

	return (
		<desactiveNSFWContext.Provider
			value={{
				nsfw,
				setNsfw,
			}}
		>
			{children}
		</desactiveNSFWContext.Provider>
	);
}
