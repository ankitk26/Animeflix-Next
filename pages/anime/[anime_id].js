import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { SingleAnimeQuery } from "../../lib/queries";
import Layout from "../../components/Layout";
import AnimeDetailsUpper from "../../components/AnimeDetailsUpper";
import AnimeDetailsLower from "../../components/AnimeDetailsLower";

export default function AnimeDetails() {
  const router = useRouter();
  const id = router.query.anime_id;

  const { data, loading, error } = useQuery(SingleAnimeQuery, {
    variables: {
      id,
    },
  });

  return (
    <Layout
      title={loading && !data ? "Loading..." : data.anime.title}
      desc="View details of the anime"
    >
      {data && (
        <>
          <AnimeDetailsUpper anime={data.anime} />
          <AnimeDetailsLower anime={data.anime} />
        </>
      )}
    </Layout>
  );
}
