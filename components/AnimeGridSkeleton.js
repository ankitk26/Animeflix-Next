import AnimeItemSkeleton from "./AnimeItemSkeleton";

export default function AnimeGridSkeleton() {
  return (
    <div className="mb-10 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="w-48 h-3 bg-gray-700 rounded-md"></div>
      </div>
      <div className="grid items-start justify-between grid-cols-5 gap-8 mt-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <AnimeItemSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
