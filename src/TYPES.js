export const FORMAT_TYPES = {
	anime: {
		type: "anime",
		id: crypto.randomUUID(),
	},

	manga: {
		type: "manga",
		id: crypto.randomUUID(),
	},

	movie: {
		type: "movie",
		id: crypto.randomUUID(),
	},

	special: {
		type: "special",
		id: crypto.randomUUID(),
	},

	ova: {
		type: "ova",
		id: crypto.randomUUID(),
	},
};

export const ROUTE = {
	id: "id",
};

export const newObjet = {
  ova: FORMAT_TYPES.ova.type,
  anime: FORMAT_TYPES.anime.type,
  manga: FORMAT_TYPES.manga.type,
  movie: FORMAT_TYPES.movie.type,
  special: FORMAT_TYPES.special.type
}
