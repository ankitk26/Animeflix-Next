import AnimeGridQuery from "@/components/AnimeGridQuery";
import Layout from "@/components/Layout";
import { UpcomingAnimeQuery } from "@/lib/queries";

export default function UpcomingAnimePage() {
  const title = "Upcoming anime";
  return (
    <Layout title={title} desc="List of all anime releasing in future seasons">
      <AnimeGridQuery query={UpcomingAnimeQuery} title={title} />
    </Layout>
  );
}
