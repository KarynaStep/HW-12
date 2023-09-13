import React, { Component } from "react";
import { getUsers } from "../../api";
import Error from "../Error";
import Spinner from "../Spinner";
import { withLanguage } from "./../../components/HOCs";
import { LANGUAGE, LANGUAGE_NAV_MENU } from "./../../constants";

const UsersLoaderFN = ({language}) => {
  return (class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      isFetching: false,
      currentPage: 1,
      currentResults: 5,
    };
  }

  load = () => {
    const { currentPage, currentResults } = this.state;
    this.setState({ isFetching: true });
    getUsers({ page: currentPage, results: currentResults })
      .then((data) => {
        // console.log(data);
        if (data.error) {
          throw new Error();
        }
        this.setState({ users: data.results });
      })
      .catch((err) => {
        // console.dir(err);
        this.setState({ error: err });
      })
      .finally(() => {
        this.setState({ isFetching: false });
      });
  };

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      this.load();
    }
  }

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState((state, props) => ({ currentPage: state.currentPage - 1 }));
    }
  };

  nextPage = () =>
    this.setState((state, props) => ({ currentPage: state.currentPage + 1 }));

  render() {
    const { isFetching, error, users, currentPage } = this.state;
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
          <button onClick={this.prevPage} disabled={currentPage === 1}>
            &lt; prev
          </button>
          <span>&nbsp;{currentPage}&nbsp;</span>
          <button onClick={this.nextPage}>next &gt;</button>
        </div>
        <ul>
          {isFetching && <Spinner />}
          {isFetching ||
            users.map((user) => <li key={user.login.uuid}>{user.email}</li>)}
        </ul>
      </section>
    );
  }
})
}


export default withLanguage(UsersLoaderFN);
