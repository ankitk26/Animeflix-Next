import AnimeItem from "./AnimeItem";

export default function AnimeItems({ animeList }) {
  return (
    <div className="grid items-start grid-cols-5 gap-8 mt-3">
      {animeList.map((anime) => (
        <AnimeItem key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
}
