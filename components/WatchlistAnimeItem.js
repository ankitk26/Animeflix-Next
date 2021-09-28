import { RemoveAnimeMutation } from "@/lib/mutations";
import { useMutation } from "@apollo/client";
import { Snackbar } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export default function WatchlistAnimeItem({ anime }) {
  const [isOpen, setIsOpen] = useState(false);

  const [removeAnime] = useMutation(RemoveAnimeMutation, {
    variables: {
      id: anime.mal_id,
    },
    update: (_, result) => {
      console.log(result.data);
      setIsOpen(true);
    },
    onError: (err) => {
      console.log(err.graphQLErrors[0].message);
    },
  });

  const handleRemove = () => {
    setIsOpen(true);
    removeAnime();
  };

  return (
    <div className="flex flex-col items-center mb-8">
      <Link href={`/anime/${anime.mal_id}`}>
        <a className="flex flex-col items-center gap-2">
          <img
            src={anime.image_url}
            alt={anime.title + anime.mal_id}
            className="rounded-lg cursor-pointer h-[300px]"
          />
          <span className="text-sm font-medium text-center text-gray-100">
            {anime.title}
          </span>
        </a>
      </Link>
      <button
        className="flex items-center gap-3 px-4 py-2 mt-2 text-sm text-gray-300 bg-gray-800 rounded-md"
        onClick={handleRemove}
      >
        <span>Remove from watchlist</span>
      </button>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={() => setIsOpen(false)}
        message="Anime removed from watchlist"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        key="bottom center watchlist"
        action={
          <button onClick={() => setIsOpen(false)}>
            <MdClose />
          </button>
        }
      />
    </div>
  );
}
