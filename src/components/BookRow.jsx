import axios from "axios";
import { useEffect, useState, useRef } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Book from "./Book";
import { Link } from "react-router-dom";
import DataLoadingMessage from "./DataLoadingMessage";
import MarginLeftContainer from "./UI/MarginLeftContainer";
const BookRow = ({ rowID, fetchURL, title }) => {
  const [books, setBooks] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const sliceRef = useRef(null);
  useEffect(() => {
    setIsLoading(true);
    axios.get(fetchURL).then((response) => {
      setBooks(response.data.items);
      setIsLoading(false);
    });
  }, [fetchURL]);
  const scrollBySmooth = (scrollOffset) => {
    if (sliceRef.current) {
      sliceRef.current.scrollTo({
        left: scrollPosition + scrollOffset,
        behavior: "smooth",
      });
    }
  };
  const handleScroll = () => {
    if (sliceRef.current) {
      setScrollPosition(sliceRef.current.scrollLeft);
    }
  };
  return (
    <div className="relative">
      <MarginLeftContainer>
        <h2 className="py-5 text-lg font-bold text-primary-text-color md:text-xl lg:text-xl">
          {title}
        </h2>
      </MarginLeftContainer>
      <div
        id={"slice" + rowID}
        className="flex flex-col items-start justify-center overflow-x-hidden sm:pl-8"
        onScroll={handleScroll}
        ref={sliceRef}
      >
        <div className="mx-auto h-56 w-full whitespace-nowrap ">
          {!isLoading ? (
            <>
              <MdOutlineKeyboardArrowLeft
                onClick={() => scrollBySmooth(-300)}
                className="absolute left-0 top-[50%] z-10 cursor-pointer rounded-full bg-primary-color text-3xl text-primary-text-color duration-300 hover:scale-110  "
              />
              {books.map((item, index) => {
                return (
                  <Link
                    id={item.id}
                    key={item.id}
                    to={`/${item.id}/${item.volumeInfo.title}`}
                    state={{
                      title: item.volumeInfo.title,
                      img: item.volumeInfo.imageLinks?.thumbnail,
                      author: item.volumeInfo.authors,
                      description: item.volumeInfo.description,
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
                onClick={() => scrollBySmooth(300)}
                className="absolute right-0 top-[50%] z-10 cursor-pointer rounded-full bg-primary-color text-3xl text-primary-text-color duration-300 hover:scale-110  "
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
