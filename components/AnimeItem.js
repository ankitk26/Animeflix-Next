import Link from "next/link";

export default function AnimeItem({ anime }) {
  return (
    <div className="mb-5">
      <Link href={`/anime/${anime.mal_id}`}>
        <a className="flex flex-col items-center gap-2">
          <img
            src={anime.image_url}
            alt={anime.title + anime.mal_id}
            className="rounded-lg h-[320px] cursor-pointer"
          />
          <span className="text-sm font-medium text-center text-gray-100">
            {anime.title}
          </span>
        </a>
      </Link>
    </div>
  );
}
