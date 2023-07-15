import { Suspense, lazy } from 'react'
import { Header } from './component/Header'
import { Footer } from './component/Footer'
import { Routers } from './Routers/router'
import { Input } from './component/Input'
import { Route } from 'wouter'
import { Select } from './component/Select'

const Home = lazy(() => import('./component/Home'))

export default function App () {
  return (
    <Suspense fallback={() => <h1>Cargando...</h1>}>
      <Header />
      <Input />
      <Routers />
      <Route path='/' component={Home} />
      <Footer />
    </Suspense>
  )
}
