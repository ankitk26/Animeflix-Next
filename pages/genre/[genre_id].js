import AnimeItems from "@/components/AnimeItems";
import Layout from "@/components/Layout";
import { GenreAnimeQuery } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

export default function GenreAnime() {
  const router = useRouter();
  const genreId = router.query.genre_id;
  const [currPage, setCurrPage] = useState(1);

  const { data, loading } = useQuery(GenreAnimeQuery, {
    variables: { genreId, page: currPage },
  });

  return (
    <Layout
      title={loading && !data ? "Loading..." : data.genre.genre_name}
      desc="Anime list of genre selected"
    >
      {data && (
        <div className="mb-10">
          <h1 className="font-medium text-gray-100">{data.genre.genre_name}</h1>
          <AnimeItems animeList={data.genre.anime} />
        </div>
      )}
    </Layout>
  );
}
