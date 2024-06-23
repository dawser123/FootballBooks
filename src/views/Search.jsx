import { Link, Outlet, useOutlet } from "react-router-dom";
import requests from "../api/requests";
import Book from "../components/Book";
import SearchBar from "../components/SearchBar";
import useGetData from "../hooks/useGetData";
import DataLoadingMessage from "../components/DataLoadingMessage";
import { useState } from "react";
const Search = () => {
  const outlet = useOutlet();
  const navigationData = [{ url: "/search", title: "Search" }];
  const [fetchUrl, setFetchUrl] = useState(requests.requestSearch);
  const [inputError, setInputError] = useState(false);
  const { books, isLoading, error } = useGetData(fetchUrl);
  const handleSearch = (clubName) => {
    if (clubName.trim() === "") {
      setInputError(true);
      setFetchUrl(requests.requestSearch);
      return;
    } else {
      setFetchUrl(requests.requestSearch.replace("club", clubName));
      setInputError(false);
    }
  };
  if (outlet) {
    return <Outlet />;
  }
  return (
    <div className="px-3 py-3 sm:px-8">
      <SearchBar clubName={handleSearch} />
      {inputError && (
        <p className="mt-2 text-center text-red-500">
          Please enter a search term.
        </p>
      )}
      <div className="my-10 flex justify-center">
        <div className="flex flex-wrap justify-center gap-3">
          {isLoading ? (
            <DataLoadingMessage />
          ) : error ? (
            <p className="text-primary-text-color">
              Failed to fetch data from the server.
            </p>
          ) : (
            books.map((item) => (
              <Link
                key={item.id}
                to={`${item.id}/${item.volumeInfo.title}`}
                state={{
                  id: item.id,
                  pathName: navigationData,
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
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Search;
