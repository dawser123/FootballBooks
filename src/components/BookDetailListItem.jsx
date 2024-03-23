import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
const BookDetailListItem = ({ bookDetails }) => {
  const [showInfo, setShowInfo] = useState(false);
  const toggleShowInfo = () => {
    setTimeout(() => {
      setShowInfo((prevState) => !prevState);
    }, 100);
  };
  return (
    <div className="my-10 w-full px-5 md:px-8 ">
      <button
        className={`flex w-full items-center justify-between  ${showInfo ? "bg-primary-color" : "bg-primary-color/65"} p-5 py-5 text-right text-xl font-bold text-primary-text-color sm:px-8 `}
        onClick={toggleShowInfo}
      >
        Product information
        {!showInfo ? (
          <FaAngleDown className="text-2xl text-primary-text-color " />
        ) : (
          <FaAngleUp className="text-2xl text-primary-text-color " />
        )}
      </button>
      <div></div>
      {showInfo && (
        <div className="relative">
          <div className=" bg-primary-color px-6 sm:px-8 ">
            <ul className=" flex flex-col items-center gap-10 overflow-x-hidden  bg-primary-color bg-opacity-100 py-5 text-white">
              <div className="flex w-full items-center justify-between gap-2">
                <span>Publisher</span>
                <li className="text-right font-bold ">
                  {bookDetails.bookDetails.publisher
                    ? bookDetails.bookDetails.publisher
                    : "Publisher data not available"}
                </li>
              </div>
              <div className="flex w-full items-center justify-between gap-2">
                <span>Publication date</span>
                <li className="text-right font-bold">
                  {bookDetails.bookDetails.publishedDate
                    ? bookDetails.bookDetails.publishedDate
                    : "Publication date not available"}
                </li>
              </div>
              <div className="flex w-full items-center justify-between gap-2">
                <span>ISBN_13</span>
         <li className="text-right font-bold">
                  {bookDetails.bookDetails.industryIdentifiers[0]?.identifier
                    ? bookDetails.bookDetails.industryIdentifiers[0]?.identifier
                    : "ISBN_13 date not available"}
                </li>
              </div>
              <div className="flex w-full items-center justify-between gap-2">
                <span>ISBN_10</span>
                <li className="text-right font-bold">
                  {bookDetails.bookDetails.industryIdentifiers[1]?.identifier
                    ? bookDetails.bookDetails.industryIdentifiers[1]?.identifier
                    : "ISBN_10 date not available"}
                </li>
              </div>
              <div className="flex w-full items-center justify-between gap-2">
                <span>Available to buy</span>
                <li className="text-right font-bold">
                  {bookDetails.bookDetails?.saleInfo ? (
                    <a
                      className="cursor-pointer duration-300 hover:text-primary-color-hover"
                      href={bookDetails.bookDetails?.saleInfo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sale Link
                    </a>
                  ) : (
                    "Not available to buy"
                  )}
                </li>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default BookDetailListItem;
