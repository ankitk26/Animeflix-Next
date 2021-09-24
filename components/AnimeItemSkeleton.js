export default function AnimeItemSkeleton() {
  return (
    <div className="flex flex-col items-center h-full gap-3 mb-5 space-x-5 animate-pulse">
      <div className="w-56 bg-gray-700 rounded-md h-80" />
      <div className="w-48 h-3 bg-gray-700 rounded-md" />
    </div>
  );
}
