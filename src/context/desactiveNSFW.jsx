import { createContext, useState } from "react";

export const desactiveNSFWContext = createContext();

export const DesactiveNSFWPovider = ({ children }) => {
	const [nsfw, setNsfw] = useState({
		sfw: false,
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
};
