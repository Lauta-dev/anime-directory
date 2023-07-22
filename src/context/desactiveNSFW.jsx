import { createContext, useState } from "react";

export const desactiveNSFWContext = createContext();

/**
 *
 * @returns un useState [ nsfw, setNsfw ] por defecto tiene el valor de true
 */
export const DesactiveNSFWPovider = ({ children }) => {
	const [nsfw, setNsfw] = useState(true);

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
