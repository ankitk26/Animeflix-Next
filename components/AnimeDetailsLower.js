import Link from "next/link";
import Gallery from "./Gallery";
import Recommendations from "./Recommendations";

export default function AnimeDetailsLower({ anime }) {
  const { genres, synopsis, recommendations, characters, pictures } = anime;

  return (
    <div className="mt-12 mb-8">
      <div className="flex flex-wrap items-center gap-4 my-4">
        {genres.map((genre) => (
          <Link key={genre.mal_id} href={`/genre/${genre.mal_id}`}>
            <a className="flex px-3 py-1 bg-gray-900 border border-gray-600 rounded-full hover:bg-gray-800">
              <span className="text-sm text-gray-100">{genre.name}</span>
            </a>
          </Link>
        ))}
      </div>

      <div className="mb-12">
        <div className="mt-2">
          <p className="text-[15px] tracking-wide text-gray-300">{synopsis}</p>
        </div>
      </div>

      {/* {characters.length > 0 && <Characters characters={characters} />} */}

      {pictures.length > 0 && <Gallery pictures={pictures} />}

      {recommendations.length > 0 && (
        <Recommendations recommendations={recommendations} />
      )}
    </div>
  );
}
