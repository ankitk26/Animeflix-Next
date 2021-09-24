import AnimeGridQuery from "../components/AnimeGridQuery";
import Layout from "../components/Layout";
import { TopAiringAnimeQuery } from "../lib/queries";

export default function TopAiringAnime() {
  const title = "Top Airing Anime";
  return (
    <Layout title={title} desc="The top airing anime list">
      <AnimeGridQuery query={TopAiringAnimeQuery} title={title} />
    </Layout>
  );
}
