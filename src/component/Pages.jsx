import { useContext } from "react";
import { desactiveNSFWContext } from "../context/desactiveNSFW";

export default function Pages() {
	const { nsfw, setNsfw } = useContext(desactiveNSFWContext);

	const handleNextPage = () => setNsfw({ sfw: true, page: nsfw.page + 1 });
	const handleLastPage = () => setNsfw({ sfw: true, page: nsfw.page - 1 });
	const handleResetPage = () => setNsfw({ sfw: true, page: (nsfw.page = 1) });

	return (
		<>
			<button type="button" onClick={handleNextPage}>
				Next page
			</button>

			{nsfw?.page > 1 ? (
				<button type="button" onClick={handleLastPage}>
					Last page
				</button>
			) : (
				<button disabled type="button" onClick={handleLastPage}>
					Last page
				</button>
			)}

			{nsfw?.page === 1 ? (
				<button type="button" disabled onClick={handleResetPage}>
					Fist page
				</button>
			) : (
				<button type="button" onClick={handleResetPage}>
					Fist page
				</button>
			)}
		</>
	);
}
