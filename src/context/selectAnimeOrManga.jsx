import { createContext, useState } from 'react'
import { FORMAT_TYPES } from '../TYPES'

export const SelectAnimeOrMangaContext = createContext()

export const SelectAnimeOrMangaContextProvider = ({ children }) => {
  const [a, setA] = useState(FORMAT_TYPES.anime)

  return (
    <SelectAnimeOrMangaContext.Provider value={{
      a,
      setA
    }}>
      {children}
    </SelectAnimeOrMangaContext.Provider>
  )
}
