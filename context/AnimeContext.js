import { WatchlistQuery } from "@/lib/queries";
import { useQuery } from "@apollo/client";
import { createContext, useContext, useEffect, useState } from "react";

const AnimeContext = createContext();

export default function AnimeProvider({ children }) {
  const [watchlistItems, setWatchlistItems] = useState(null);
  const { data, loading } = useQuery(WatchlistQuery);

  useEffect(() => {
    if (data) {
      setWatchlistItems(data.getWatchList);
      console.log(data);
    }
  }, [data]);

  const addItem = (data) => {
    setWatchlistItems((prev) => [data, ...prev]);
  };

  const removeItem = (mal_id) => {
    setWatchlistItems((prev) => prev.filter((item) => item.mal_id !== mal_id));
    console.log("removed");
  };

  return (
    <AnimeContext.Provider
      value={{ watchlistItems, loading, addItem, removeItem }}
    >
      {children}
    </AnimeContext.Provider>
  );
}

export const useAnime = () => useContext(AnimeContext);
