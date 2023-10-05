import { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../contexts";

const useUsers = (getUsers) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentResults] = useState(5);
  const [language] = useContext(LanguageContext);

  const load = () => {
    // const { users, currentPage, currentResults } = state;
    setIsFetching(true);
    getUsers({
      page: currentPage,
      results: currentResults,
    })
      .then((data) => {
        setUsers(data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    load();
  }, [currentPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const nextPage = () => setCurrentPage((currentPage) => currentPage + 1);

  return {
    users,
    error,
    isFetching,
    currentPage,
    currentResults,
    prevPage,
    nextPage,
    language,
  };
};

export default useUsers;
