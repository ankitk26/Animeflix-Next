import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimeGridSkeleton from "./AnimeGridSkeleton";
import AnimeItems from "./AnimeItems";

export default function AnimeGridQuery({
  forHome = false,
  query,
  title,
  link = "",
}) {
  const { data, loading } = useQuery(query);
  const [list, setList] = useState(null);
  const [seasonTitle, setSeasonTitle] = useState("");

  useEffect(() => {
    if (data !== null && data !== undefined) {
      const getQuery = data[Object.keys(data)[0]];

      if (link === "/season") {
        setList(getQuery?.anime);
        setSeasonTitle(
          `${getQuery?.season_name} ${getQuery?.season_year} Anime`
        );
      } else setList(getQuery);
    }
  }, [data]);

  if (loading && !data) return <AnimeGridSkeleton />;

  return (
    <>
      {list && (
        <div className="mb-16">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-gray-100">
              {seasonTitle === "" ? title : seasonTitle}
            </h2>
            {forHome && (
              <Link href={link}>
                <a>
                  <span className="text-gray-100">View more</span>
                </a>
              </Link>
            )}
          </div>
          <AnimeItems animeList={forHome ? list?.slice(0, 5) : list} />
        </div>
      )}
    </>
  );
}
