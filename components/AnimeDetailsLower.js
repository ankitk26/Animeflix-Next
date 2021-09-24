import Characters from "./Characters";
import Gallery from "./Gallery";
import Recommendations from "./Recommendations";

export default function AnimeDetailsLower({ anime }) {
  const { synopsis, recommendations, characters, pictures } = anime;

  return (
    <div className="mt-12 mb-8">
      <div className="mb-12">
        <h1>Synopsis</h1>
        <div className="mt-2">
          <p className="text-sm leading-5 tracking-wide text-gray-300">
            {synopsis}
          </p>
        </div>
      </div>

      {characters.length > 0 && <Characters characters={characters} />}

      {pictures.length > 0 && <Gallery pictures={pictures} />}

      {recommendations.length > 0 && (
        <Recommendations recommendations={recommendations} />
      )}
    </div>
  );
}
