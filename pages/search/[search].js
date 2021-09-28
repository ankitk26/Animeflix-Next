import AnimeItems from "@/components/AnimeItems";
import Layout from "@/components/Layout";
import { SearchQuery } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/dist/client/router";

export default function SearchResults() {
  const router = useRouter();
  const searchQuery = router.query.search;

  const { data } = useQuery(SearchQuery, {
    variables: { searchQuery },
  });

  return (
    <Layout title="Search results" desc="Search for anime or movie">
      {data && (
        <div className="mb-10">
          <h1 className="font-medium text-gray-100">
            Search results for "{searchQuery}"
          </h1>
          <AnimeItems animeList={data.searchAnime} />
        </div>
      )}
    </Layout>
  );
}
