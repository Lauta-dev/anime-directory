import { useGetAnime } from "../hooks/getAnime";
import { CardAnimeAndManga } from "./CardAnimeAndManga";

import "./css/slider.css";

export default function GetAnimes({ params }) {
  const { animeData } = useGetAnime({ title: params.title });

  if (animeData === null) return;

  const { data, pagination } = animeData;

  return data?.length > 0 ? (
    <>
      <section id="top_anime_conteiner">
        <CardAnimeAndManga animeArray={data} pagination={pagination} />
      </section>
    </>
  ) : (
      <>
        <h2>No se encontro el anime {params.title}</h2>
        <a href='/'>Back home</a>
      </>
  );
}
