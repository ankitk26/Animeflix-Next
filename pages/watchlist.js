import AnimeGridSkeleton from "@/components/AnimeGridSkeleton";
import Layout from "@/components/Layout";
import WatchlistAnimeItem from "@/components/WatchlistAnimeItem";
import { useAnime } from "@/context/AnimeContext";

export default function Watchlist() {
  const { watchlistItems, loading } = useAnime();
  const title = "Your watchlist";

  if (loading && !watchlistItems)
    return (
      <Layout>
        <AnimeGridSkeleton />
      </Layout>
    );

  return (
    <Layout title={title} desc="List of the user's anime in watchlist">
      {watchlistItems && (
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-gray-100">Your watchlist</h1>
          </div>
          <div className="grid grid-cols-5 gap-8 mt-3">
            {watchlistItems.length > 0 ? (
              watchlistItems.map((anime) => (
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
