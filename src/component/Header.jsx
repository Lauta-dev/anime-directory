import { Link } from 'wouter'
import './css/header.css'

export function Header () {
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>
            <img id='logo' src='./public/web_page_icon.svg' alt='Logo de la pagina web' />
          </Link>
        </li>
        <div>
          <li id='github'>
            <h2>Anime directory</h2>
          </li>
        </div>
      </ul>
    </header>
  )
}
