import { useContext } from "react";
import { desactiveNSFWContext } from "../context/desactiveNSFW";
import { Arrow } from './svg/Arrow.jsx'

import "./css/pages.css";
import "./css/buttonsPage.css"

function Buttons({ title, action, disabled, className }) {
	return (
		<>
			{disabled ? (
				<button className={className} type="button" disabled>
					{title}
				</button>
			) : (
				<button className={className} type="button" onClick={action}>
					{title}
				</button>
			)}
		</>
	);
}

export default function Pages({ pagination }) {
	const { nsfw, setNsfw } = useContext(desactiveNSFWContext);

	const handleNextPage = () =>
		setNsfw((prev) => ({ ...prev, page: nsfw.page + 1 }));

	const handleLastPage = () =>
		setNsfw((prev) => ({ ...prev, page: nsfw.page - 1 }));

	const handleResetPage = () =>
		setNsfw((prev) => ({ ...prev, page: (nsfw.page = 1) }));

	const nextPage =
		pagination?.last_visible_page === 1 ||
		pagination?.current_page === pagination?.last_visible_page;

	const lastPage = nsfw?.page > 1;
	const firsPage = nsfw?.page < 2;

	return (
		<section className="toggle_pages">
			{lastPage ? (
        <Buttons className={'last_page'} title={<Arrow />} disabled={false} action={handleLastPage} />
			) : (
          <Buttons className={'last_page'} title={<Arrow />} disabled={true} />
			)}

			{firsPage ? (
				<Buttons className={'first_page'} title={"Fist page"} disabled={true} />
			) : (
				<Buttons
          className={'first_page'}
					title={"Fist page"}
					disabled={false}
					action={handleResetPage}
				/>
			)}

			{nextPage ? (
        <Buttons className={'next_page'} title={<Arrow />} disabled={true} />
			) : (
          <Buttons className={'next_page'} title={<Arrow />} disabled={false} action={handleNextPage} />
			)}
		</section>
	);
}
