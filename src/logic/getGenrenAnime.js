export function getGenrenAnime (gender) {
  return gender.map(({ name }) => {
    if (name === 'Hentai') return 'nsfw_conteiner_title_anime'
    return 'sfw_conteiner_title_anime'
  })
}
