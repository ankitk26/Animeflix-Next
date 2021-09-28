import Link from "next/link";

export default function AnimeItem({ anime }) {
  return (
    <div className="mb-3">
      <Link href={`/anime/${anime.mal_id}`}>
        <a className="flex flex-col items-center gap-2">
          <img
            src={anime.image_url}
            alt={anime.title + anime.mal_id}
            className="rounded-lg cursor-pointer h-[300px]"
          />
          <span className="text-sm font-medium text-center text-gray-100">
            {anime.title}
          </span>
        </a>
      </Link>
    </div>
  );
}
