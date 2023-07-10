import { Suspense } from 'react'

import { Header } from './component/Header'
import { Footer } from './component/Footer'
import { Routers } from './Routers/router'
import { Input } from './component/Input'

export function App() {
  return (
    <div>
      <Suspense fallback={() => <h1>Cargando...</h1>}>
        <Header />
        <Input />
        <Routers />
        <Footer />
      </Suspense>
    </div>

  )
}
