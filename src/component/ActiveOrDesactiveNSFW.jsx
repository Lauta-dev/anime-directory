import { useContext } from "react";
import { desactiveNSFWContext } from "../context/desactiveNSFW";

export const ActiveOrDesactiveNSFW = () => {
	const { nsfw, setNsfw } = useContext(desactiveNSFWContext);
	const activeNsfw = nsfw ? "Active NSWF" : "Desactive NSWF";

	return (
		<div className="nsfw">
			<label htmlFor="check">{activeNsfw}</label>
			<input
				type="checkbox"
				name="check"
				id="check"
				onChange={() => setNsfw(!nsfw)}
				checked={nsfw}
			/>
		</div>
	);
};
