import { useAnime } from "@/context/AnimeContext";
import { AddAnimeMutation, RemoveAnimeMutation } from "@/lib/mutations";
import { useMutation } from "@apollo/client";
import Snackbar from "@mui/material/Snackbar";
import { useState } from "react";
import { MdBookmark, MdClose } from "react-icons/md";

export default function WatchlistBtn({ btnProps }) {
  const { inWatchlist, mal_id, title, title_english, image_url, score } =
    btnProps;
  const [isOpen, setIsOpen] = useState(false);
  const [isInWatchlist, setIsInWatchlist] = useState(inWatchlist);
  const { addItem, removeItem } = useAnime();

  const [addAnime] = useMutation(AddAnimeMutation, {
    variables: {
      animeInput: { mal_id, title, title_english, image_url, score },
    },
    update: (_, result) => {
      console.log(result.data);
      setIsOpen(true);
    },
    onError: (err) => {
      console.log(err.graphQLErrors[0].message);
    },
  });

  const [removeAnime] = useMutation(RemoveAnimeMutation, {
    variables: {
      id: mal_id,
    },
    update: (_, result) => {
      console.log(result.data);
      setIsOpen(true);
    },
    onError: (err) => {
      console.log(err.graphQLErrors[0].message);
    },
  });

  const addToWatchlist = () => {
    if (!isInWatchlist) {
      setIsInWatchlist(true);
      setIsOpen(true);
      addAnime();
      addItem(btnProps);
    } else {
      setIsInWatchlist(false);
      setIsOpen(true);
      removeAnime();
      removeItem(mal_id);
    }
  };

  return (
    <>
      <button
        className="flex items-center gap-3 px-4 py-2 text-sm bg-gray-800 rounded-md"
        onClick={addToWatchlist}
      >
        <MdBookmark />
        <span>{isInWatchlist ? "Added to watchlist" : "Add to watchlist"}</span>
      </button>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={() => setIsOpen(false)}
        message={
          isInWatchlist
            ? "Anime added to watchlist"
            : "Anime removed from watchlist"
        }
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        key="bottom center"
        action={
          <button onClick={() => setIsOpen(false)}>
            <MdClose />
          </button>
        }
      />
    </>
  );
}
