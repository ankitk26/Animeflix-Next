import AnimeGridQuery from "../components/AnimeGridQuery";
import Layout from "../components/Layout";
import { TopAnimeQuery } from "../lib/queries";

export default function TopRatedAnime() {
  const title = "Top rated Anime";
  return (
    <Layout title={title} desc="List of all top rated anime on Animeflix">
      <AnimeGridQuery query={TopAnimeQuery} title={title} />
    </Layout>
  );
}
