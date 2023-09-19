import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "../../api";
import Error from "../Error";
import Spinner from "../Spinner";
import { LANGUAGE, LANGUAGE_NAV_MENU } from "./../../constants";
import { LanguageContext } from "../../contexts";

const UsersLoader = () => {
  const [state, setState] = useState({
    users: [],
    error: null,
    isFetching: false,
    currentPage: 1,
    currentResults: 5,
  });
  const [language, setLanguage] = useContext(LanguageContext);

  const load = () => {
    // const { users, currentPage, currentResults } = state;
    setState({ ...state, isFetching: true });
    getUsers({
      page: state.currentPage,
      results: state.currentResults,
    }).then((data) => {
      console.log(data.results);
      if (data.error) {
        throw new Error();
      }
      setState({ ...state, users: data.results });
      console.log(state);
    });
    // .catch((err) => {
    //   setState({ ...state, error: err })
    // })
    // .finally(() => {
    //   setState({ ...state, isFetching: false })
    // });
  };

  useEffect(() => {
    console.log(state);
    load();
  }, [state.currentPage]);

  // componentDidMount() {
  //   load();
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (currentPage !== prevState.currentPage) {
  //     load();
  //   }
  // }

  const prevPage = () => {
    if (state.currentPage > 1) {
      setState((state, props) => {
        return { ...state, currentPage: state.currentPage - 1 };
      });
    }
  };

  const nextPage = () =>
    setState((state, props) => {
      return { ...state, currentPage: state.currentPage + 1 };
    });

  if (state.error) {
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
        <button onClick={prevPage} disabled={state.currentPage === 1}>
          &lt; prev
        </button>
        <span>&nbsp;{state.currentPage}&nbsp;</span>
        <button onClick={nextPage}>next &gt;</button>
      </div>
      <ul>
        {state.isFetching && <Spinner />}
        {state.isFetching ||
          state.users.map((user) => (
            <li key={user.login.uuid}>{user.email}</li>
          ))}
      </ul>
    </section>
  );
};

export default UsersLoader;
