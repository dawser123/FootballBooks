import { createContext, useEffect, useState } from "react";
const FavoriteContext = createContext({
  favorites: [],
  deleteFavorite: () => {},
  addToFavorites: () => {},
  isBookInMyList: () => {},
});
const FavoritiesFromLocalStorege = JSON.parse(
  localStorage.getItem("favorites") || "[]",
);
export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(FavoritiesFromLocalStorege);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites"));
    setFavorites(data);
  }, []);
  const addToFavorites = (book) => {
    setFavorites((prevFavorites) => [...prevFavorites, book]);
  };
  const removeFromFavorites = (book) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== book.id),
    );
  };
  const isBookInMyList = (book) => {
    return favorites.some((item) => item.id === book);
  };
  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isBookInMyList,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContext;
