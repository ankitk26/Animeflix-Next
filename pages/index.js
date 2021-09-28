import AnimeGridQuery from "@/components/AnimeGridQuery";
import Layout from "@/components/Layout";
import {
  CurrentSeasonQuery,
  PopularAnimeQuery,
  TopAiringAnimeQuery,
  TopAnimeQuery,
} from "@/lib/queries";

export default function Home() {
  return (
    <Layout
      title="Animeflix"
      desc="View Anime shows and movies, and make your own anime lists"
    >
      <AnimeGridQuery
        title="Current season anime"
        query={CurrentSeasonQuery}
        forHome
        link="/season"
      />
      <AnimeGridQuery
        title="Popular anime on Animeflix"
        query={PopularAnimeQuery}
        forHome
        link="/popular"
      />
      <AnimeGridQuery
        title="Top Airing Anime"
        query={TopAiringAnimeQuery}
        forHome
        link="/airing"
      />
      <AnimeGridQuery
        title="Top Rated Anime"
        query={TopAnimeQuery}
        forHome
        link="/toprated"
      />
    </Layout>
  );
}
