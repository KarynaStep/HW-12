import React from 'react';
import { NavLink } from 'react-router-dom';
import { LANGUAGE, LANGUAGE_NAV_MENU } from "./../../constants";
import {withLanguage} from "./../HOCs"

const NavMenu = ({ language }) => (
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
        <NavLink to="/sign-up">sign-up</NavLink>
      </li>
      <li>
        <NavLink to="/sign-in">sign-in</NavLink>
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
  

export default withLanguage(NavMenu);
