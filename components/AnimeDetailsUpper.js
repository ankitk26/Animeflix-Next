import Link from "next/link";
import { MdGrade, MdMovie } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

export default function AnimeDetailsUpper({ anime }) {
  const {
    mal_id,
    title,
    image_url,
    episodes,
    title_english,
    score,
    premiered,
    genres,
    studios,
    type,
    rating,
    duration,
    trailer_url,
    airing_period,
  } = anime;

  return (
    <div className="grid items-start grid-cols-12 gap-10">
      <div className="flex flex-col items-center col-span-3">
        <img
          src={image_url}
          alt={title}
          className="object-contain w-full rounded-lg"
        />
        {trailer_url && (
          <div className="mt-3">
            <a target="_blank" href={trailer_url} rel="noreferrer">
              <button className="flex items-center gap-3 px-4 py-2 text-sm bg-gray-800 rounded-md">
                <FaYoutube />
                <span>Watch trailer</span>
              </button>
            </a>
          </div>
        )}
      </div>

      <div className="col-span-9">
        <h1 className="text-3xl text-white">{title}</h1>

        <div className="flex items-center gap-4 mt-2">
          {title_english !== title && title_english && (
            <h4 className="text-gray-200">{title_english}</h4>
          )}
          <h4 className="text-gray-200">{type}</h4>
        </div>

        <div className="flex items-center gap-3 mt-4 mb-6">
          {premiered && (
            <span className="text-sm text-gray-400">{premiered}</span>
          )}
          {duration && duration !== "Unknown" && (
            <span className="text-sm text-gray-400">{duration}</span>
          )}
          {rating && rating !== "None" && (
            <span className="text-sm text-gray-400">{rating}</span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 my-4">
          {genres.map((genre) => (
            <Link key={genre.mal_id} href={`/genre/${genre.mal_id}`}>
              <a className="flex px-3 py-1 bg-gray-600 border border-gray-600 rounded-full">
                <span className="text-sm leading-none text-gray-100">
                  {genre.name}
                </span>
              </a>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-16 my-8">
          <div className="flex flex-col items-center gap-4">
            <MdMovie className="text-2xl" />
            <h5>Episodes</h5>
            <span className="text-xs">
              {episodes !== null ? episodes : "N/A"}
            </span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <MdGrade className="text-2xl" />
            <h5>Score</h5>
            <span className="text-xs">{score !== null ? score : "N/A"}</span>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-8 text-sm">
            <h5>Studios</h5>
            <div className="flex items-center gap-6">
              {studios.map((studio) => (
                <Link href={`/studio/${studio.mal_id}`} key={studio.mal_id}>
                  <a className="text-gray-300">{studio.name}</a>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5 text-sm">
            <span>Original Run</span>
            <span>{airing_period}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
