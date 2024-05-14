import Book from "../components/Book";
import { useContext } from "react";
import FavoriteContext from "../contexts/FavoriteContext";
import AuthContext from "../contexts/AuthContext";

const MyList = () => {
  const favoriteContext = useContext(FavoriteContext);
  const authContext = useContext(AuthContext);
  return (
    <>
      {authContext.loggedIn ? (
        <>
          <h2 className="pt-10 text-center text-2xl font-bold text-primary-text-color">
            {favoriteContext.favorites.length !== 0
              ? "My-list"
              : "Your list is empty"}
          </h2>
          <div className="mx-auto my-10 flex max-w-[85%] flex-wrap items-center justify-center gap-2 lg:max-w-[65%]">
            {favoriteContext.favorites.map(({ id, title, img }) => (
              <Book
                key={id}
                title={title}
                img={img}
                id={id}
                deleteBtn={true}
              ></Book>
            ))}
          </div>
        </>
      ) : (
        <p className="font-bod mt-10 text-center text-2xl text-primary-text-color">
          Log in to see your list
        </p>
      )}
    </>
  );
};
export default MyList;
