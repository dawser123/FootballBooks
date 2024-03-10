import { Link, Outlet, useOutlet, useParams } from "react-router-dom";
import requests from "../Requests";
import { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import leagueHeading from "./utils/leagueName";
import DataLoadingMessage from "./DataLoadingMessage";
const LeagueCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const { league } = useParams();
  const outlet = useOutlet();
  useEffect(() => {
    setIsLoading(true);
    const fetchURL = requests.requestPopularByLeague.replace(
      "{league}",
      league,
    );
    axios.get(fetchURL).then((response) => {
      setBooks(response.data.items);
      setIsLoading(false);
    });
  }, [league]);
  if (outlet) {
    return <Outlet />;
  }
  return (
    <div className="my-10">
      <h2 className="text-center text-lg text-primary-text-color">
        Top 10 books in
        <span className="ml-1 font-bold">{leagueHeading(league)}</span>
      </h2>
      <div className="mx-auto my-20 flex flex-wrap items-center justify-center gap-2">
        {!isLoading ? (
          books.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/${league}/${item.id}/${item.volumeInfo.title}`}
                state={{
                  id: item.id,
                  title: item.volumeInfo.title,
                  img: item.volumeInfo.imageLinks?.thumbnail,
                  author: item.volumeInfo.authors,
                  description: item.volumeInfo.description,
                }}
              >
                <Book
                  title={item.volumeInfo.title}
                  img={item.volumeInfo.imageLinks?.thumbnail}
                />
              </Link>
            );
          })
        ) : (
          <DataLoadingMessage />
        )}
      </div>
      <Outlet />
    </div>
  );
};
export default LeagueCard;
