export function useSearchMangaOrAnimeRegex () {
	const reg = /\/(manga|anime)\//;
	const url = window.location.href;
	const match = url.match(reg);

	const isAnime = match === null ? "anime" : match[0].replace(/\//g, '');

  return { isAnime }
}
