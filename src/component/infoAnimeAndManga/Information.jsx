import '../css/a.css'

export function InfoMangaAndAnime({ chapters, status, type, score, popularity }) {
  return (
    <ul id='info' className='slider'>
      <li>Caps: {chapters}</li>
      <li>Sourse: {status}</li>
      <li>Type: {type}</li>
      <li>Score: {score}</li>
      <li>popularity: {popularity}</li>
    </ul>
  )
}
