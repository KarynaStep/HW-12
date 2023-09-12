import React from "react";
import cx from "classnames";
import { ThemeContext } from "../../contexts";
import styles from "./Footer.module.scss";
import { THEMES } from "../../constants";
import SwitchLanguage from "../SwitchLanguage";

const Footer = () => {
  const render = ([theme]) => {
    const classes = cx({
      [styles.light]: theme === THEMES.LIGHT,
      [styles.dark]: theme === THEMES.DARK,
    });
    return (
      <div className={classes}>
        <p>&copy;2023</p>
        <SwitchLanguage />
      </div>
    );
  };

  return <ThemeContext.Consumer>{render}</ThemeContext.Consumer>;
};

export default Footer;
