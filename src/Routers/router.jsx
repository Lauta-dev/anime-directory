import { Route } from 'wouter'

export function Routers({ TopAnimes, GetAnimes, GetAnimeForID }) {
  return (
    <>
      <Route path='/anime/top' component={TopAnimes} />
      <Route path='/anime/selected/:anime' component={GetAnimes} />
      <Route path='/anime/selected/one/:malId' component={GetAnimeForID} />
    </>
  )
}
