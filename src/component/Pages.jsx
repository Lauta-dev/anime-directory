import { useContext } from "react";
import { desactiveNSFWContext } from "../context/desactiveNSFW";
import "./css/pages.css";

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

export default function Pages({ pagination }) {
	const { nsfw, setNsfw } = useContext(desactiveNSFWContext);

	const handleNextPage = () =>
		setNsfw((prev) => ({ sfw: prev.sfw, page: nsfw.page + 1 }));

	const handleLastPage = () =>
		setNsfw((prev) => ({ sfw: prev.sfw, page: nsfw.page - 1 }));

	const handleResetPage = () =>
		setNsfw((prev) => ({ sfw: prev.sfw, page: (nsfw.page = 1) }));

	const nextPage =
		pagination?.last_visible_page === 1 ||
		pagination?.current_page === pagination?.last_visible_page;

	const lastPage = nsfw?.page > 1;
	const firsPage = nsfw?.page < 2;

	return (
		<section className="toggle_pages">
			{lastPage ? (
				<Buttons title={"Last page"} disabled={false} action={handleLastPage} />
			) : (
				<Buttons title={"Last page"} disabled={true} />
			)}

			{firsPage ? (
				<Buttons title={"Fist page"} disabled={true} />
			) : (
				<Buttons
					title={"Fist page"}
					disabled={false}
					action={handleResetPage}
				/>
			)}

			{nextPage ? (
				<Buttons title={"Next page"} disabled={true} action={handleNextPage} />
			) : (
				<Buttons title={"Next page"} disabled={false} action={handleNextPage} />
			)}
		</section>
	);
}
