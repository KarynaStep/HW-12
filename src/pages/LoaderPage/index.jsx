import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { LanguageContext } from "../../contexts";
import {
  LANGUAGE,
  LANGUAGE_NAV_MENU,
  LANGUAGE_NAV_MENU_LOADER,
} from "./../../constants";
// import { getUsersJSON, getEventsJSON, getProductsJSON } from '../../api';
// import LoaderData from '../../components/LoaderData';
// import ViewUsers from '../../components/ViewUsers';
// import ViewEvents from '../../components/ViewEvents';
// import ViewProducts from '../../components/ViewProducts';

const LoaderPage = () => {
  const render = ([language]) => (
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
  return <LanguageContext.Consumer>{ render}</LanguageContext.Consumer>
};

export default LoaderPage;
