import Link from "next/link";

const navLinks = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/genre",
    text: "Browse genres",
  },
  {
    to: "/upcoming",
    text: "Upcoming Anime",
  },
  {
    to: "/watchlist",
    text: "Your Watchlist",
  },
];

export default function DrawerContents({ toggleDrawer }) {
  return (
    <aside
      className="h-full bg-gray-900 w-60"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <div className="flex flex-col items-center gap-4 mt-5">
        {navLinks.map((navLink) => (
          <Link href={navLink.to} key={navLink.text}>
            <a>
              <span className="tracking-wide text-gray-200 cursor-pointer hover:text-gray-300">
                {navLink.text}
              </span>
            </a>
          </Link>
        ))}
      </div>
    </aside>
  );
}
