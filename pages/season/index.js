import AnimeGridQuery from "@/components/AnimeGridQuery";
import Layout from "@/components/Layout";
import { CurrentSeasonQuery } from "@/lib/queries";

export default function CurrentSeasonAnimePage() {
  const title = "Current season anime";
  return (
    <Layout title={title} desc="Current season anime">
      <AnimeGridQuery query={CurrentSeasonQuery} title={title} link="/season" />
    </Layout>
  );
}
