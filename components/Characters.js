export default function Characters({ characters }) {
  return (
    <div className="mb-12">
      <h1>Characters</h1>
      <div className="grid max-w-full grid-cols-8 gap-6 px-0 mt-4">
        {characters.map((character) => (
          <div
            key={character.mal_id}
            className="flex flex-col items-center justify-center col-span-1"
          >
            <img
              src={character.image_url}
              alt={character.name}
              className="object-contain w-3/4 mx-auto my-0"
            />

            <div className="mt-2">
              <h5 className="text-center text-gray-300">{character.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
