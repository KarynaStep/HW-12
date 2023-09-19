import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LANGUAGE,
  LANGUAGE_NAV_MENU,
  LANGUAGE_NAV_MENU_LOADER,
} from "./../../constants";
import { LanguageContext } from "../../contexts";


const LoaderPage = (props) => {
  const [language] = useContext(LanguageContext);

  return (
    <>
      <h3>
        {language === LANGUAGE.ENG
          ? LANGUAGE_NAV_MENU.LODER
          : LANGUAGE_NAV_MENU.LODER_UKR}
      </h3>
      <ul>
        <li>
          <NavLink to="/loader/users">
            {language === LANGUAGE.ENG
              ? LANGUAGE_NAV_MENU_LOADER.USERS
              : LANGUAGE_NAV_MENU_LOADER.USERS_UKR}
          </NavLink>
        </li>
        <li>
          <NavLink to="/loader/events">
            {language === LANGUAGE.ENG
              ? LANGUAGE_NAV_MENU_LOADER.EVENTS
              : LANGUAGE_NAV_MENU_LOADER.EVENTS_UKR}
          </NavLink>
        </li>
        <li>
          <NavLink to="/loader/products">
            {language === LANGUAGE.ENG
              ? LANGUAGE_NAV_MENU_LOADER.PRODUCTS
              : LANGUAGE_NAV_MENU_LOADER.PRODUCTS_UKR}
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default LoaderPage;
