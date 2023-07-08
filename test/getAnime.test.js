import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { useGetAnime } from '../src/hooks/getAnimeForID'
import { ListOfAnimes } from '../src/component/ListOfAnimes'
import React from 'react'

test('e', () => {
  const renderComponent = render(
    <ListOfAnimes
      animeArray={[]}
      nARenderizar={2}
      section={2}
    />
  )
  console.log(renderComponent)
})
