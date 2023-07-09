import { lazy, Suspense } from 'react'

import { Header } from './component/Header'


import { Footer } from './component/Footer'
import { Routers } from './Routers/router'
import { Input } from './component/Input'

// lasy - Carga los archivos cuando lo necesite
const TopAnimes = lazy(() => import('./component/topAnime'))
const GetAnimeForID = lazy(() => import('./component/getAnimeForID'))
const GetAnimes = lazy(() => import('./component/getAnime'))



export function App() {
  return (
    <>
      <Suspense fallback={() => <h1>Cargando...</h1>}>
        <Header />
        <Input />
        <Routers
          GetAnimeForID={GetAnimeForID}
          GetAnimes={GetAnimes}
          TopAnimes={TopAnimes}
        />
        <Footer />
      </Suspense>
    </>
  )
}
