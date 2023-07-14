import { Suspense, lazy } from 'react'
import { Header } from './component/Header'
import { Footer } from './component/Footer'
import { Routers } from './Routers/router'
import { Input } from './component/Input'
import { Route } from 'wouter'

const Home = lazy(() => import('./component/Home'))

export default function App () {
  return (
    <Suspense fallback={() => <h1>Cargando...</h1>}>
      <Header />
      <label htmlFor='pet-select'>Choose a pet:</label>

      <select id='pet-select'>
        <option value=''>--Please choose an option--</option>
        <option value='dog'>Dog</option>
        <option value='cat'>Cat</option>
        <option value='hamster'>Hamster</option>
        <option value='parrot'>Parrot</option>
        <option value='spider'>Spider</option>
        <option value='goldfish'>Goldfish</option>
      </select>

      <Input />
      <Routers />
      <Route path='/' component={Home} />
      <Footer />
    </Suspense>
  )
}
