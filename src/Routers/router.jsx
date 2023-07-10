import { lazy } from 'react'
import { Route } from 'wouter'
const Home = lazy(() => import('../component/Home'))
const TopAnimes = lazy(() => import('../component/topAnime'))
const GetAnimeForID = lazy(() => import('../component/getAnimeForID'))
const GetAnimes = lazy(() => import('../component/getAnime'))

export function Routers() {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/anime/top' component={TopAnimes} />
      <Route path='/anime/selected/:anime' component={GetAnimes} />
      <Route path='/anime/selected/one/:malId' component={GetAnimeForID} />
    </>
  )
}
