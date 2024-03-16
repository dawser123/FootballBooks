import FavoriteContext from "../components/contexts/FavoriteContext";
import ball from "../assets/ball.jpg";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
const Book = ({ title, img, index, deleteBtn, id }) => {
  const favoriteContext = useContext(FavoriteContext);
  const deleteHandler = () => {
    favoriteContext.removeFromFavorites({ id });
  };
  return (
    <div className={`inline-block ${index !== 0 && "mx-1"}`}>
      <div className="relative h-[200px] min-w-[150px] max-w-[150px] cursor-pointer ">
        <img
          className="h-full w-full overflow-hidden rounded-xl object-cover  text-primary-text-color  "
          src={`${img ? img : ball}`}
          alt={title}
        />
        <div className="absolute left-0 top-0 h-full w-full rounded-xl bg-gradient-to-b opacity-0 duration-300 from-primary-color-hover to-primary-color hover:opacity-90  ">
          <p className=" flex h-full items-end  justify-center whitespace-normal p-1 text-center text-sm text-white">
            {title}
          </p>
          {deleteBtn && (
            <IoMdClose
              onClick={deleteHandler}
              className="absolute right-1 top-1 cursor-pointer text-3xl text-primary-text-color duration-300 hover:scale-125"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Book;
