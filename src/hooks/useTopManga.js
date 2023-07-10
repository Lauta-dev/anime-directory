import { useEffect, useState } from "react";
import { getTopManga } from "../logic/getTopManga";

export function useTopManga() {
  const [topManga, setTopManga] = useState([])

  useEffect(() => {
    getTopManga().then(data => setTopManga(data))
  }, [])

  return { topManga }
}