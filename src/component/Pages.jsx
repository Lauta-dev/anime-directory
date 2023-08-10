import { useContext } from "react";
import { desactiveNSFWContext } from "../context/desactiveNSFW";

function Buttons({ title, action, disabled }) {
	return (
		<>
			{disabled ? (
				<button type="button" disabled>
					{title}
				</button>
			) : (
				<button type="button" onClick={action}>
					{title}
				</button>
			)}
		</>
	);
}

export default function Pages() {
	const { nsfw, setNsfw } = useContext(desactiveNSFWContext);

	const handleNextPage = () =>
		setNsfw((prev) => ({ sfw: prev.sfw, page: nsfw.page + 1 }));

	const handleLastPage = () =>
		setNsfw((prev) => ({ sfw: prev.sfw, page: nsfw.page - 1 }));

	const handleResetPage = () =>
		setNsfw((prev) => ({ sfw: prev.sfw, page: (nsfw.page = 1) }));

	return (
		<>
			<Buttons title={"Next page"} disabled={false} action={handleNextPage} />

			{nsfw?.page > 1 ? (
				<Buttons title={"Last page"} disabled={false} action={handleLastPage} />
			) : (
				<Buttons title={"Last page"} disabled={true} />
			)}

			{nsfw?.page < 2 ? (
				<Buttons title={"Fist page"} disabled={true} />
			) : (
				<Buttons
					title={"Fist page"}
					disabled={false}
					action={handleResetPage}
				/>
			)}
		</>
	);
}
