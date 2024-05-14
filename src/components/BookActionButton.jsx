import { useLocation, } from "react-router-dom";
import { useContext } from "react";
import ball from "../assets/ball.jpg";
import FavoriteContext from "../contexts/FavoriteContext";
import AuthContext from "../contexts/AuthContext";
import Button from '../ui/Button'
const BookActionButton = ({ setErrorMsg }) => {
  const location = useLocation();
  const favoriteContext = useContext(FavoriteContext);
  const user = useContext(AuthContext);
  const handleAddtoFavorite = () => {
    if (user.user.email) {
      favoriteContext.addToFavorites(location.state);
    } else {
      setErrorMsg(true);
    }
  };
  return (
    <div className="mx-auto flex flex-col gap-5 ">
      <img
        className="h-[250px] w-[200px] object-fill text-primary-text-color opacity-80"
        src={`${location.state.img ? location.state.img : ball}`}
        alt={location.state.title}
      />
      <div className="flex flex-col items-center justify-center gap-2  ">
        <Button
          disabled={favoriteContext.isBookInMyList(location.state.id)}
          aria-label={
            favoriteContext.isBookInMyList(location.state.id)
              ? "Remove from my list"
              : "Add to my list"
          }
          onClick={() => {
            handleAddtoFavorite(location.state);
          }}
          className={`rounded-xl ${favoriteContext.isBookInMyList(location.state.id) ? "bg-primary-color-hover" : "bg-primary-color"} py-2  hover:bg-primary-color-hover`}
        >
          {favoriteContext.isBookInMyList(location.state.id)
            ? "Added to my list"
            : "Add to my list"}
        </Button>
      </div>
    </div>
  );
};
export default BookActionButton;
