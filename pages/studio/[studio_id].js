import AnimeItems from "@/components/AnimeItems";
import Layout from "@/components/Layout";
import { StudioQuery } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function StudioAnime() {
  const router = useRouter();
  const studioId = router.query.studio_id;

  const { data, loading } = useQuery(StudioQuery, {
    variables: { studioId },
  });

  return (
    <Layout
      title={loading && !data ? "Loading..." : data.studio.studio_name}
      desc="Anime list made by selected studio"
    >
      {data && (
        <div className="mb-10">
          <h1 className="font-medium text-gray-100">
            {data.studio.studio_name}
          </h1>
          <AnimeItems animeList={data.studio.anime} />
        </div>
      )}
    </Layout>
  );
}
