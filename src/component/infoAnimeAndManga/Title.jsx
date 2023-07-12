/**
 * @param {Array} param1.title Titulo del el contenidoes 
 * */
export function Titles({ titles }) {
  return (
    <>
      <ul>
        <li> <h2>Anime titles:</h2> </li>
        {titles.map(({ title, id }) => <li key={id}> {title} </li>)}
      </ul>
    </>
  )
}
