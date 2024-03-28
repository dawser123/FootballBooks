import axios from "axios";
import { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Book from "./Book";
import { Link } from "react-router-dom";
import DataLoadingMessage from "./DataLoadingMessage";
import MarginLeftContainer from "./UI/MarginLeftContainer";
import { slideLeft, slideRight } from "./utils/slider";
const BookRow = ({ rowID, fetchURL, title }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(fetchURL).then((response) => {
      setBooks(response.data.items);
      setIsLoading(false);
    });
  }, [fetchURL]);
  const handleSlideLeft = () => {
    slideLeft("slice" + rowID, 300);
  };
  const handleSlideRight = () => {
    slideRight("slice" + rowID, 300);
  };
  return (
    <div id={rowID} className="bg relative">
      <MarginLeftContainer>
        <h2 className="py-5 text-lg font-bold text-primary-text-color md:text-xl lg:text-xl">
          {title}
        </h2>
      </MarginLeftContainer>
      <div
        id={"slice" + rowID}
        className="flex flex-col items-start justify-center overflow-x-hidden sm:pl-8"
      >
        <div className="  mx-auto h-56 w-full whitespace-nowrap ">
          {!isLoading ? (
            <>
              <MdOutlineKeyboardArrowLeft
                onClick={handleSlideLeft}
                className="absolute left-0 top-[50%] z-10 cursor-pointer rounded-full bg-primary-color text-3xl text-primary-text-color duration-300 hover:scale-110  "
              />
              {books.map((item, index) => {
                return (
                  <Link
                    id={item.id}
                    key={item.id}
                    to={`/${item.id}/${item.volumeInfo.title}`}
                    state={{
                      category: title,
                      categoryId: rowID,
                      title: item.volumeInfo.title,
                      img: item.volumeInfo.imageLinks?.thumbnail,
                      author: item.volumeInfo.authors,
                      description: item.volumeInfo.description,
                      bookDetails: {
                        publisher: item.volumeInfo.publisher,
                        publishedDate: item.volumeInfo.publishedDate,
                        pageCount: item.volumeInfo.pageCount,
                        industryIdentifiers:
                          item.volumeInfo.industryIdentifiers,
                        language: item.volumeInfo.language,
                        saleInfo: item.saleInfo.buyLink,
                      },
                    }}
                  >
                    <Book
                      id={item.id}
                      index={index}
                      title={item.volumeInfo.title}
                      img={item.volumeInfo.imageLinks?.thumbnail}
                    />
                  </Link>
                );
              })}
              <MdOutlineKeyboardArrowRight
                onClick={handleSlideRight}
                className="absolute right-1 top-[50%] z-10 cursor-pointer rounded-full bg-primary-color text-3xl text-primary-text-color duration-300 hover:scale-110  "
              />
            </>
          ) : (
            <DataLoadingMessage />
          )}
        </div>
      </div>
    </div>
  );
};
export default BookRow;
