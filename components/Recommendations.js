import AnimeItems from "./AnimeItems";

export default function Recommendations({ recommendations }) {
  return (
    <section className="mb-12">
      <h1>More like this</h1>
      <AnimeItems animeList={recommendations?.slice(0, 15)} />
    </section>
  );
}
