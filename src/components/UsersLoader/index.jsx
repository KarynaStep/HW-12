import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "../../api";
import Error from "../Error";
import Spinner from "../Spinner";
import { LANGUAGE, LANGUAGE_NAV_MENU } from "./../../constants";
import { LanguageContext } from "../../contexts";

const UsersLoader = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentResults, setCurrentResults] = useState(5);
  const [language, setLanguage] = useContext(LanguageContext);

  const load = () => {
    // const { users, currentPage, currentResults } = state;
    setIsFetching(true);
    getUsers({
      page: currentPage,
      results: currentResults,
    }).then((data) => {
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

  const nextPage = () =>
    setCurrentPage((currentPage) => currentPage + 1);

  if (error) {
    return <Error />;
  }
  return (
    <section>
      <h2>
        {language === LANGUAGE.ENG
          ? LANGUAGE_NAV_MENU.USERS
          : LANGUAGE_NAV_MENU.USERS_UKR}
        :
      </h2>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          &lt; prev
        </button>
        <span>&nbsp;{currentPage}&nbsp;</span>
        <button onClick={nextPage}>next &gt;</button>
      </div>
      <ul>
        {isFetching && <Spinner />}
        {isFetching ||
          users.map((user) => (
            <li key={user.login.uuid}>{user.email}</li>
          ))}
      </ul>
    </section>
  );
};

export default UsersLoader;
