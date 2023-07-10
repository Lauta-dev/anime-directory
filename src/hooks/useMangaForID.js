import { useEffect, useState } from "react";
import { getMangaForId } from "../logic/getMangaForID";

export function useMangaForId({ id }) {
  const [getMangaForId, setMangaForId] = useState([])

  useEffect(() => {
    getMangaForId(id).then(data => setMangaForId(data))

  }, [])

  return { getMangaForId }
}