import React, { useEffect, useReducer, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import cx from "classnames";

import {
  UserContext,
  ThemeContext,
  LanguageContext,
  MenuContext,
} from "./contexts";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SignInForm from "./components/forms/SignInForm";

import Home from "./pages/Home";
import UsersPage from "./pages/UsersPage";
import Page404 from "./pages/Page404";
import LoaderPage from "./pages/LoaderPage";
import UsersBlock from "./pages/LoaderPage/UsersBlock";
import EventsBlock from "./pages/LoaderPage/EventsBlock";
import ProductsBlock from "./pages/LoaderPage/ProductsBlock";
import FormsPage from "./pages/FormsPage";
import AnketForm from "./components/AnketForm";
import Chat from "./components/Chat";

import { useAuthUser, useTheme, useClicker } from "./hooks";
import { THEMES, LANGUAGE } from "./constants";
import styles from "./App.module.scss";

import { STATUS_MENU } from "./constants";
import appReducer from "./appReduser";

const App = () => {
  const { user, selectorUser } = useAuthUser({
    id: 1,
    firstName: "Brad",
    lastName: "Pitt",
    isSelect: false,
    avatar: "https://cdn-icons-png.flaticon.com/128/3641/3641963.png",
  });
  const [language, setLanguage] = useState(LANGUAGE.ENG);
  const changeLanguage = () => {
    setLanguage(language === LANGUAGE.ENG ? LANGUAGE.UKR : LANGUAGE.ENG);
  };
  const [state, dispatch] = useReducer(appReducer, { isMenuOpen: false });
  const handelOpenMenu = (event) => {
    event.stopPropagation();
    return dispatch({ type: STATUS_MENU.OPEN });
  };

  const handelCloseMenu = () => dispatch({ type: STATUS_MENU.CLOSE });

  const [menuView, setMenuView] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 750) {
      console.log(window.innerWidth);
      setMenuView(true);
    }
    console.log(menuView);
  }, []);

  const menuIcon = cx(styles.menu, { [styles.view]: menuView });

  return (
    <ThemeContext.Provider value={useTheme(THEMES.LIGHT)}>
      <LanguageContext.Provider value={[language, changeLanguage]}>
        <UserContext.Provider value={{ user, selectorUser }}>
          <MenuContext.Provider value={{ state, handelCloseMenu }}>
            <BrowserRouter>
              <MenuIcon
                fontSize="large"
                className={menuIcon}
                onClick={handelOpenMenu}
                tabIndex="0"
                onKeyDown={handelOpenMenu}
              />
              <p>{useClicker()}</p>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/sign-up" element={<FormsPage />} />
                  <Route path="/sign-in" element={<SignInForm />} />
                  <Route path="/users" element={<UsersPage />} />
                  <Route path="/anketa" element={<AnketForm />} />
                  <Route path="/loader" element={<LoaderPage />}>
                    <Route path="users" element={<UsersBlock />} />
                    <Route path="events" element={<EventsBlock />} />
                    <Route path="products" element={<ProductsBlock />} />
                  </Route>
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </main>
              <Footer />
            </BrowserRouter>
          </MenuContext.Provider>
        </UserContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
