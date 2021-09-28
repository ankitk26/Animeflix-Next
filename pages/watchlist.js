import AnimeGridQuery from "@/components/AnimeGridQuery";
import Layout from "@/components/Layout";
import { WatchlistQuery } from "@/lib/queries";

export default function Watchlist() {
  const title = "Your watchlist";
  return (
    <Layout title={title} desc="List of the user's anime in watchlist">
      <AnimeGridQuery query={WatchlistQuery} title={title} />
    </Layout>
  );
}
