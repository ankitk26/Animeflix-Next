import AnimeGridQuery from "@/components/AnimeGridQuery";
import AnimeGridSkeleton from "@/components/AnimeGridSkeleton";
import AnimeItem from "@/components/AnimeItem";
import AnimeItems from "@/components/AnimeItems";
import Layout from "@/components/Layout";
import WatchlistAnimeItem from "@/components/WatchlistAnimeItem";
import { WatchlistQuery } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function Watchlist() {
  const router = useRouter();
  const { data, loading } = useQuery(WatchlistQuery);
  const title = "Your watchlist";

  if (loading && !data)
    return (
      <Layout>
        <AnimeGridSkeleton />
      </Layout>
    );

  return (
    <Layout title={title} desc="List of the user's anime in watchlist">
      {data && (
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-gray-100">Your watchlist</h1>
          </div>
          <div className="grid grid-cols-5 gap-8 mt-3">
            {data.getWatchList.length > 0 ? (
              data.getWatchList.map((anime) => (
                <WatchlistAnimeItem key={anime.mal_id} anime={anime} />
              ))
            ) : (
              <p className="text-gray-300">No anime added to watchlist</p>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
