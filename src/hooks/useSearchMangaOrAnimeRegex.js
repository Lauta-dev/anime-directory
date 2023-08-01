export function useSearchMangaOrAnimeRegex () {
	const reg = /\/(manga|anime)\//;
	const url = window.location.href;
	const match = url.match(reg);

  const wordWithoutSlashes = match[0].replace(/\//g, '');
	const isAnime = match === null ? "anime" : wordWithoutSlashes;

  return { isAnime }
}
