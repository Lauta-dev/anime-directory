import { Link } from "wouter";

export function HeaderSectionHome ({ value, path, select, className = "header_option" }) {
  return (
    <header className={className}>
      <b> {value.toUpperCase()} {select} </b> 
      <Link to={path}>View All</Link>
     </header>
  )
}
