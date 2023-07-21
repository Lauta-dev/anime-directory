import { Suspense, lazy } from 'react'
import { Footer } from './component/Footer'
import { Routers } from './Routers/router'
import { Input } from './component/Input'
import { Route } from 'wouter'
import { SelectAnimeOrMangaContextProvider } from './context/selectAnimeOrManga'
import { Layout } from './component/Layout'

const Home = lazy(() => import('./component/Home'))

export default function App () {
  return (
    <SelectAnimeOrMangaContextProvider>
    <Suspense fallback={<h1>Cargando...</h1>}>
      <Layout>
        <Input />
        <Routers />
        <Route path='/' component={Home} />
        <Footer />
      </Layout>
    </Suspense>
    </SelectAnimeOrMangaContextProvider>
  )
}
