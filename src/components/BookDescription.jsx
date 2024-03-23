import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
const BookDescription = ({ bookDetails }) => {
  const [showMoreText, setShowMoreText] = useState(false);
  const truncateString = (str, num) => {
    if (str.length > num && !showMoreText) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const toggleShowMoreText = () => {
    setShowMoreText(!showMoreText);
  };
  return (
    <div className="flex flex-col md:w-[80%]">
      <article className="mx-auto mb-20 mt-10 flex flex-col justify-center gap-5 px-5 text-primary-text-color sm:px-8 md:w-[70%] ">
        <span className="font-bold">{bookDetails.title} </span>
        <p className="font-bold ">
          Author:
          <span className="ml-2 font-normal">{bookDetails.author[0]}</span>
        </p>
        <div className="font-bold">
          Description:
          <p className="mt-2  font-normal">
            {truncateString(bookDetails.description, 200)}
          </p>
          {bookDetails.description.length > 200 && (
            <button className="mt-2 w-full" onClick={toggleShowMoreText}>
              {showMoreText ? (
                <div className="flex items-center justify-center gap-2">
                  <FaAngleUp className="text-2xl font-bold" />
                  <span>Show less</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <FaAngleDown className="text-2xl font-bold" />
                  <span>Show more</span>
                </div>
              )}
            </button>
          )}
        </div>
      </article>
    </div>
  );
};
export default BookDescription;
