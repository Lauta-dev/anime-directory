import '../css/mangaAndAnimeName.css'

export function Titles ({ titles }) {
  return (
    <section>
      <ul className='mangaAndAnimeName'>
        {titles.map(({ title, id }) => <li key={id}> <strong>{title}</strong> </li>)}
      </ul>
    </section>
  )
}
