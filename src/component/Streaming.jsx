import { useEffect, useState } from "react";
import { ExternalLink } from "./svg/extenalLink";

export function Streaming({ id }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/streaming`)
      .then(res => res.ok ? res.json() : 'error')
      .then(({ data }) => setData(data))
  }, [])

  return (
    <section>
      <b>View on</b>
      <ul>
        {data?.map(({ name, url }) => {
          return (
            <li key={name}>
              <a href={url} target="_blank">{name} <ExternalLink /></a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
