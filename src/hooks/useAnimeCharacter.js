import { useEffect, useState } from "react";
import getCharacter from "../logic/getCharacters";

export function useAnimeCharacter({ id }) {
  const [getAnimeCharacters, setGetAnimesCharacters] = useState([])

  useEffect(() => {
    getCharacter(id).then(({ data }) => setGetAnimesCharacters(data))
  }, [])

  return { getAnimeCharacters }
}
