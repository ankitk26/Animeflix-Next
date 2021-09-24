import Link from "next/link";
import SearchAnimeInput from "./SearchAnimeInput";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-3 bg-gray-800">
      <Link href="/">
        <a>
          <h1 className="font-semibold tracking-wide text-[#E50914] uppercase">
            Animeflix
          </h1>
        </a>
      </Link>

      <div className="flex items-center gap-5">
        <SearchAnimeInput />
        <button className="px-4 py-1 text-sm text-gray-100 border border-gray-100 rounded hover:bg-gray-700">
          LOG IN
        </button>
      </div>
    </nav>
  );
}
