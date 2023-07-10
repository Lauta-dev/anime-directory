import { lazy } from 'react'
import { Route } from 'wouter'

const GetMangaForID = lazy(() => import('../component/GetMangaForID'))
const Home = lazy(() => import('../component/Home'))
const TopAnimes = lazy(() => import('../component/TopAnimeAndManga'))
const TopManga = lazy(() => import('../component/TopManga'))

const GetAnimeForID = lazy(() => import('../component/getAnimeForID'))
const GetAnimes = lazy(() => import('../component/getAnime'))

export function Routers() {
  return (
    <>
      <Route path='/' component={Home} />
      <Route path='/manga/top' component={TopManga} />
      <Route path='/manga/selected/one/:malId' component={GetMangaForID} />


      <Route path='/anime/top' component={TopAnimes} />
      <Route path='/anime/selected/:anime' component={GetAnimes} />

      <Route path='/anime/selected/one/:malId' component={GetAnimeForID} />
    </>
  )
}
