import '../css/mangaAndAnimeName.css'

/**
 * @param {Array} param1.title Titulo del el contenidoes
 * */
export function Titles ({ titles }) {
  return (
    <>
      <ul className='mangaAndAnimeName'>
        {titles.map(({ title, id }) => <li key={id}> <strong>{title}</strong> </li>)}
      </ul>
    </>
  )
}
