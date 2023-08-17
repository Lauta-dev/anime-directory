import { Link } from "wouter"
import { Slice } from "../Slice"

export function Relations({ relations }) {
  return (
    <section className="relation_conteiner_section">
      <h2>Relations</h2>
      <Slice className="relation_conteiner">
        {relations.map(({ relation, entry }) => {
          const entryInArray = entry[0]
          const type = entryInArray.type
          const id = entryInArray.mal_id
         
          return (
            <>
              <Link key={id} to={`/${type}/id/${id}`}>
                <b>{relation}</b>
                {entry.map(data => (
                  <div key={data.mal_id}>
                    <b>{data.name}</b>
                    <b>{data.type}</b>
                  </div>
                ))}
              </Link>
            </>
          )
        })}
      </Slice>
    </section>
  )
}
