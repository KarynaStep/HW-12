import React, { useContext, useEffect, useRef, useState } from 'react';
import CloseIcon from "@mui/icons-material/Close";

import { NavLink } from 'react-router-dom';
import { LANGUAGE, LANGUAGE_NAV_MENU } from "./../../constants";
import { LanguageContext, MenuContext } from '../../contexts';
import cx from "classnames"
import styles from './NavMenu.module.scss'

const NavMenu = (props) => {
  const { state: { isMenuOpen }, handelCloseMenu } = useContext(MenuContext);
  const [language] = useContext(LanguageContext);
  const navClassName = cx(styles.navmenu, {[styles.open]: isMenuOpen,})
  const navRef = useRef(null)
  useEffect(() => {
    const handelClick = ({ target }) => {
      if (isMenuOpen && navRef.current.contains(target) === false) {
        handelCloseMenu();
      }
    };
    window.addEventListener("click", handelClick);
    return () => {
      window.removeEventListener("click", handelClick);
    }; // eslint-disable-next-line
  }, [isMenuOpen]);

  return (
    <nav className={navClassName} ref={navRef}>
      <CloseIcon
        fontSize="large"
        className={styles.close}
        onClick={handelCloseMenu}
        onKeyDown={handelCloseMenu}
      />
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
          <NavLink to="/chat">chat</NavLink>
        </li>
        <li>
          <NavLink to="/anketa">anketa</NavLink>
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

  

export default NavMenu;
