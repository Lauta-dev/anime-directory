import { useLocation } from "wouter"
import { useContext } from "react";
import { desactiveNSFWContext } from "../context/desactiveNSFW";

export default function Pages () {
  const { _, setNsfw } = useContext(desactiveNSFWContext);
  const [l, setL] = useLocation()
  
  const handleSelectOption = (e) => {
    const value = e.target.value
    setNsfw({ page: value, sfw: false })
    setL(`${l}?page=${value}`)
  }

  const param = new URLSearchParams(window.location.search)
  const page = param.get('page')

  console.log({page})
  const num = [1, 2, 3, 4]
  
  return (
    <label htmlFor="select">
      <select id="select" onChange={handleSelectOption}>
        {num.map(num => (
          <option
            key={num}
            value={num}>Page {num}
          </option>
        ))}
      </select>
    </label>
  )
}
