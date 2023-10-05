import React from "react";
import { getUsers } from "../../api";
import Error from "../Error";
import Spinner from "../Spinner";
import { LANGUAGE, LANGUAGE_NAV_MENU } from "./../../constants";
import { useUsers } from "../../hooks";
// import { LanguageContext } from "../../contexts";

const UsersLoader = () => {
const {
  users,
  error,
  isFetching,
  currentPage,
  currentResults,
  prevPage,
  nextPage,
  language
} = useUsers(getUsers);

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
