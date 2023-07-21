import { lazy } from 'react'
import { Route } from 'wouter'
import { ROUTE, FORMAT_TYPES } from '../TYPES'

const GetMangaForID = lazy(() => import('../component/GetMangaForID'))
const TopAnimes = lazy(() => import('../component/TopAnimeAndManga'))
const TopManga = lazy(() => import('../component/TopManga'))

const GetAnimeForID = lazy(() => import('../component/getAnimeForID'))
const GetAnimes = lazy(() => import('../component/getAnime'))

export function Routers () {
  return (
    <>
      <Route path={`/${FORMAT_TYPES.manga}/top`} component={TopManga} />
      <Route path={`/${FORMAT_TYPES.manga}/selected/:title`} component={GetAnimes} />
      <Route path={`/${FORMAT_TYPES.manga}/selected/${ROUTE.id}/:malId`} component={GetMangaForID} />

      <Route path={`/${FORMAT_TYPES.anime}/top`} component={TopAnimes} />
      <Route path={`/${FORMAT_TYPES.anime}/selected/:title`} component={GetAnimes} />

      <Route path={`/${FORMAT_TYPES.anime}/selected/${ROUTE.id}/:malId`} component={GetAnimeForID} />
      <Route path={`/${FORMAT_TYPES.movie}/selected/${ROUTE.id}/:malId`} component={GetAnimeForID} />
      <Route path={`/${FORMAT_TYPES.special}/selected/${ROUTE.id}/:malId`} component={GetAnimeForID} />
      <Route path={`/${FORMAT_TYPES.ova}/selected/${ROUTE.id}/:malId`} component={GetAnimeForID} />
      <Route path={`/${FORMAT_TYPES.ona}/selected/${ROUTE.id}/:malId`} component={GetAnimeForID} />
      <Route path={`/${FORMAT_TYPES.doujinshi}/selected/${ROUTE.id}/:malId`} component={GetAnimeForID} />
    </>
  )
}
