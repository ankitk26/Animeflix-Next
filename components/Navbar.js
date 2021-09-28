import { Drawer } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import DrawerContents from "./DrawerContents";
import SearchAnimeInput from "./SearchAnimeInput";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (anchor, open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <nav className="py-3 bg-gray-800 ">
      <div className="w-[90%] flex items-center justify-between mx-auto">
        <div className="flex items-center gap-4">
          <button onClick={toggleDrawer("left", true)}>
            <MdMenu className="text-2xl" />
          </button>
          <Drawer
            anchor="left"
            open={isOpen}
            onClose={toggleDrawer("left", false)}
          >
            <DrawerContents toggleDrawer={toggleDrawer} />
          </Drawer>
          <Link href="/">
            <a>
              <h1 className="font-semibold tracking-wide text-[#E50914] uppercase">
                Animeflix
              </h1>
            </a>
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <SearchAnimeInput />
          <button className="px-4 py-1 text-sm text-gray-100 border border-gray-100 rounded hover:bg-gray-700">
            LOG IN
          </button>
        </div>
      </div>
    </nav>
  );
}
