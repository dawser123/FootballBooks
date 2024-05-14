import { Link, Outlet, useOutlet, useParams } from "react-router-dom";
import Book from "./Book";
import DataLoadingMessage from "./DataLoadingMessage";
import { leagueHeading, leagueToNationality } from "./utils/leagueName";
import Breadcrumbs from "./Breadcrumbs";
import requests from "./api/requests";
import useGetData from "../hooks/useGetData";
const LeagueCard = () => {
  const { league } = useParams();
  const outlet = useOutlet();
  const navigationData = [
    { url: "/#topfiveleagues", title: "Top five leagues" },
  ];
  const fetchURL = requests.requestPopularByLeague.replace(
    "{league}",
    leagueToNationality(league),
  );
  const { books, isLoading, error } = useGetData(fetchURL);
  if (outlet) {
    return <Outlet />;
  }
  return (
    <>
      <Breadcrumbs navigationData={navigationData} />
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
                    bookDetails: {
                      publisher: item.volumeInfo.publisher,
                      publishedDate: item.volumeInfo.publishedDate,
                      pageCount: item.volumeInfo.pageCount,
                      industryIdentifiers: item.volumeInfo.industryIdentifiers,
                      language: item.volumeInfo.language,
                      saleInfo: item.saleInfo.buyLink,
                    },
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
            <>
              {error ? (
                <p className="text-primary-text-color">
                  Failed to fetch data from the server.
                </p>
              ) : (
                <DataLoadingMessage />
              )}
            </>
          )}
        </div>
        <Outlet />
      </div>
    </>
  );
};
export default LeagueCard;
