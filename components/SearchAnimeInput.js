import { useRouter } from "next/dist/client/router";
import { useState } from "react";

export default function SearchAnimeInput() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        className="px-2 py-1 text-sm bg-transparent border border-gray-500 rounded focus:border-gray-200 focus:outline-none"
        onChange={handleChange}
        placeholder="Search for anime, movies, OVA"
      />
    </form>
  );
}
