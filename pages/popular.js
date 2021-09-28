import AnimeGridQuery from "@/components/AnimeGridQuery";
import Layout from "@/components/Layout";
import { PopularAnimeQuery } from "@/lib/queries";

export default function PopularAnimePage() {
  const title = "Popular Anime on Animeflix";
  return (
    <Layout title={title} desc="All the popular anime viewed on Animeflix">
      <AnimeGridQuery query={PopularAnimeQuery} title={title} />
    </Layout>
  );
}
