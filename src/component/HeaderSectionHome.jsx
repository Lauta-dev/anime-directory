import { Link } from "wouter";

export function HeaderSectionHome ({ value, path, select }) {
  return (
    <header className="header_option">
      <b> {value.toUpperCase()} {select} </b> 
      <Link to={path}>View All</Link>
     </header>
  )
}
