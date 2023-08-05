import { useContext } from "react";
import { desactiveNSFWContext } from "../context/desactiveNSFW";
import './css/checked.css'

export const ActiveOrDesactiveNSFW = () => {
	const { nsfw, setNsfw } = useContext(desactiveNSFWContext);
	const active = nsfw.sfw ? "Active NSFW" : "Desactive NSFW";

  const handleChangeNsfw = () => setNsfw({
    sfw: !nsfw.sfw
  })

	return (
		<div className="nsfw">
			<label htmlFor="check">{active}</label>
			<input
				type="checkbox"
				name="check"
				id="check"
				onChange={handleChangeNsfw}
				checked={!nsfw.sfw}
			/>
		</div>
	);
};
