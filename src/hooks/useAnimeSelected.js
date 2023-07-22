export function useAnimeSelected({ data }) {
	const globalInfo = {
		mal: data.url,
		id: data.mal_id,
		title: data.title,
		titleEnglish: data.title_english,
		titleJapanese: data.title_japanese,
		type: data.type,
		synopsis: data.synopsis,
		score: data.score,
		genres: data.genres,
		status: data.status,
		popularity: data.popularity,
	};

	const image = {
		jpg: {
			imageURL: data.images.jpg.image_url,
			largeImageURL: data.images.jpg.large_image_url,
			smallImageURL: data.images.jpg.small_image_url,
		},
		webp: {
			imageURL: data.images.webp.image_url,
			largeImageURL: data.images.webp.large_image_url,
			smallImageURL: data.images.webp.small_image_url,
		},
	};

	const titles = [
		{
			id: crypto.randomUUID(),
			title: globalInfo.title,
		},
		{
			id: crypto.randomUUID(),
			title: globalInfo.titleEnglish,
		},
		{
			id: crypto.randomUUID(),
			title: globalInfo.titleJapanese,
		},
	];

	return { titles, image, globalInfo };
}
