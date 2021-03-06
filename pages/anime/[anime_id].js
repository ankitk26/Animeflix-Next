import AnimeDetailsLower from "@/components/AnimeDetailsLower";
import AnimeDetailsUpper from "@/components/AnimeDetailsUpper";
import ErrorMessage from "@/components/ErrorMessage";
import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import { SingleAnimeQuery } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function AnimeDetails() {
  const router = useRouter();
  const id = router.query.anime_id;

  const { data, loading, error } = useQuery(SingleAnimeQuery, {
    variables: {
      id,
    },
  });

  if (loading && !data) return <Spinner />;

  if (error) return <ErrorMessage />;

  return (
    <Layout
      title={loading && !data ? "Loading..." : data.anime.title}
      desc="View details of the anime"
    >
      {data !== undefined && data !== null && (
        <>
          <AnimeDetailsUpper anime={data.anime} />
          <AnimeDetailsLower anime={data.anime} />
        </>
      )}
    </Layout>
  );
}
