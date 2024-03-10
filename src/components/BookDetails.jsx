import { useContext, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import ball from "../assets/ball.jpg";
import { IoIosArrowBack } from "react-icons/io";
import Button from "./UI/Button";
import FavoriteContext from "./contexts/FavoriteContext";
import AuthContext from "../components/contexts/AuthContext";
import Modal from "../components/UI/Modal";
import BookDescription from "./BookDescription";
const BookDetails = () => {
  const location = useLocation();
  const [errorMsg, setErrorMsg] = useState(false);
  const {
    title = "Title not available",
    img,
    author = "Unknown author",
    description = "Description not available",
  } = location.state;
  const { league } = useParams();
  const favoriteContext = useContext(FavoriteContext);
  const user = useContext(AuthContext);
  const handleAddtoFavorite = () => {
    if (user.user.email) {
      favoriteContext.addToFavorites(location.state);
    } else {
      setErrorMsg(true);
    }
  };
  const handleModal = () => {
    setErrorMsg(false);
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="mx-auto flex flex-col gap-5">
          <img
            className="h-[250px] w-[200px] object-fill text-primary-text-color opacity-80"
            src={`${img ? img : ball}`}
            alt={title}
          />
          <div className="flex flex-col items-center justify-center gap-2  ">
            <Button
              disabled={favoriteContext.isBookInMyList(location.state.id)}
              onClick={() => {
                handleAddtoFavorite(location.state);
              }}
              className={`rounded-xl ${favoriteContext.isBookInMyList(location.state.id) ? "bg-primary-color-hover" : "bg-secondary-color"} py-2  hover:bg-primary-color-hover`}
            >
              {favoriteContext.isBookInMyList(location.state.id)
                ? "Added to my list"
                : "Add to my list"}
            </Button>
            {league ? (
              <Link to={`/${league}`}>
                <IoIosArrowBack className="cursor-pointer text-2xl text-primary-text-color duration-300 hover:scale-125" />
              </Link>
            ) : (
              <Link to="/#bookrow">
                <IoIosArrowBack className="cursor-pointer text-2xl text-primary-text-color duration-300 hover:scale-125" />
              </Link>
            )}
          </div>
        </div>
        <BookDescription
          description={description}
          title={title}
          author={author}
        />
      </div>
      {errorMsg && (
        <Modal
          onClose={handleModal}
          title="Log in to add to my list."
          isOpen={errorMsg}
        >
          <div className="flex items-center justify-center gap-3 px-5">
            <Link to="/login">
              <Button
                onClick={handleModal}
                className="w-48 rounded-2xl px-10 py-3 sm:max-w-32"
              >
                Login
              </Button>
            </Link>

            <Button
              onClick={handleModal}
              className="w-48 rounded-2xl px-10 py-3 sm:max-w-32"
            >
              Close
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};
export default BookDetails;
