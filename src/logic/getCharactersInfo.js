export function getCharacterInfo ({ id }) {
  return fetch(`https://api.jikan.moe/v4/characters/${id}/full`)
    .then(data => data.ok ? data.json() : console.log('Error'))
    .then(info => info)
}
