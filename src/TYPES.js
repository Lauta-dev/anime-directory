import { nanoid } from "nanoid";

export const FORMAT_TYPES = {
	anime: {
		type: "anime",
		id: nanoid(),
	},

	manga: {
		type: "manga",
		id: nanoid(),
	},

	movie: {
		type: "movie",
		id: nanoid(),
	},

	special: {
		type: "special",
		id: nanoid(),
	},

	ova: {
		type: "ova",
		id: nanoid(),
	},

	doujinshi: {
		type: "doujinshi",
		id: nanoid(),
	},
};

export const ROUTE = {
	id: "id",
};

/*
	
string (manga_search_query_type)
Enum: "manga" "novel" "lightnovel" "oneshot" "doujin" "manhwa" "manhua" 
*/

export const MANGA_FILTERS = {
	manga: {
		type: "manga",
		id: nanoid(),
	},
	novel: {
		type: "novel",
		id: nanoid(),
	},
	doujin: {
		type: "doujin",
		id: nanoid(),
	},
	manhwa: {
		type: "manhwa",
		id: nanoid(),
	},
	manhua: {
		type: "manhua",
		id: nanoid(),
	},
	oneshot: {
		type: "oneshot",
		id: nanoid(),
	},
	lightnovel: {
		type: "lightnovel",
		id: nanoid(),
	},
};
