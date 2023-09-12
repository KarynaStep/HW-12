import React from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from "../../contexts";
import { LANGUAGE, LANGUAGE_NAV_MENU } from "./../../constants";

const NavMenu = () => {
  const render = ([language]) => {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              {language === LANGUAGE.ENG
                ? LANGUAGE_NAV_MENU.HOME
                : LANGUAGE_NAV_MENU.HOME_UKR}
            </NavLink>
          </li>
          <li>
            <NavLink to="/users">
              {language === LANGUAGE.ENG
                ? LANGUAGE_NAV_MENU.USERS
                : LANGUAGE_NAV_MENU.USERS_UKR}
            </NavLink>
          </li>
          <li>
            <NavLink to="/loader">
              {language === LANGUAGE.ENG
                ? LANGUAGE_NAV_MENU.LODER
                : LANGUAGE_NAV_MENU.LODER_UKR}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  return <LanguageContext.Consumer>{render}</LanguageContext.Consumer>;
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">home</NavLink>
        </li>
        <li>
          <NavLink to="/users">users</NavLink>
        </li>
        <li>
          <NavLink to="/loader">loader</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
