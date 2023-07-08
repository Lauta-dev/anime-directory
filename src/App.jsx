import { Header } from './component/Header'
import { TopAnimes } from './component/topAnime'

import { GetAnimes } from './component/getAnime'
import { GetAnimeForID } from './component/getAnimeForID'
import { Footer } from './component/Footer'
import { Routers } from './Routers/router'
import { AnimeRandomArray } from './randomAnimeArray'
import { Input } from './component/Input'

export function App() {
  return (
    <section>
      <Header />
      <Input />
      <AnimeRandomArray />
      <Routers
        GetAnimeForID={GetAnimeForID}
        GetAnimes={GetAnimes}
        TopAnimes={TopAnimes}
      />
      <Footer />
    </section>
  )
}
