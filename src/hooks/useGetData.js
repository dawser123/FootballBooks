import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = (fetchURL) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(fetchURL)
      .then((response) => {
        setBooks(response.data.items);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [fetchURL]);

  return { books, isLoading, error };
};

export default useGetData;
