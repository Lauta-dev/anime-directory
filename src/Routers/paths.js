import { ROUTE } from "../TYPES";

export const pathAnimeWithId = ({ product }) =>
	`/${product}/selected/${ROUTE.id}/:malId`;
