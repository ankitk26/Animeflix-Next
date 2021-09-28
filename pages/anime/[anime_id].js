import AnimeDetailsLower from "@/components/AnimeDetailsLower";
import AnimeDetailsUpper from "@/components/AnimeDetailsUpper";
import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import { SingleAnimeQuery } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function AnimeDetails() {
  const router = useRouter();
  const id = router.query.anime_id;

  const { data, loading } = useQuery(SingleAnimeQuery, {
    variables: {
      id,
    },
  });

  if (loading && !data) return <Spinner />;

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
