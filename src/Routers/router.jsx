import { lazy } from 'react'
import { Route } from 'wouter'
import { ROUTE, TYPES } from '../TYPES'

const GetMangaForID = lazy(() => import('../component/GetMangaForID'))
const TopAnimes = lazy(() => import('../component/TopAnimeAndManga'))
const TopManga = lazy(() => import('../component/TopManga'))

const GetAnimeForID = lazy(() => import('../component/getAnimeForID'))
const GetAnimes = lazy(() => import('../component/getAnime'))

export function Routers () {
  return (
    <>
      <Route path={`/${TYPES.manga}/top`} component={TopManga} />
      <Route path={`/${TYPES.manga}/selected/:title`} component={GetAnimes} />
      <Route path={`/${TYPES.manga}/selected/${ROUTE.id}/:malId`} component={GetMangaForID} />

      <Route path={`/${TYPES.anime}/top`} component={TopAnimes} />
      <Route path={`/${TYPES.anime}/selected/:title`} component={GetAnimes} />

      <Route path={`/${TYPES.anime}/selected/${ROUTE.id}/:malId`} component={GetAnimeForID} />
      <Route path={`/${TYPES.movie}/selected/${ROUTE.id}/:malId`} component={GetAnimeForID} />
      <Route path={`/${TYPES.special}/selected/${ROUTE.id}/:malId`} component={GetAnimeForID} />
      <Route path={`/${TYPES.ova}/selected/${ROUTE.id}/:malId`} component={GetAnimeForID} />
      <Route path={`/${TYPES.ona}/selected/${ROUTE.id}/:malId`} component={GetAnimeForID} />
      <Route path={`/${TYPES.doujinshi}/selected/${ROUTE.id}/:malId`} component={GetAnimeForID} />
    </>
  )
}
