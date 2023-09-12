import React from 'react';
import cx from 'classnames';
import { ThemeContext } from '../../contexts';
import NavMenu from '../NavMenu';
import Avatar from '../Avatar';
import SwitchTheme from '../SwitchTheme';
import styles from './Header.module.scss';
import { THEMES } from '../../constants';

const Header = () => {
  const render = ([theme]) => {
    const classes = cx(styles.container, {
      [styles.light]: theme === THEMES.LIGHT,
      [styles.dark]: theme === THEMES.DARK,
    });
    return (
      <div className={classes}>
        <NavMenu />
        <Avatar />
        <SwitchTheme />
      </div>
    );
  };

  return <ThemeContext.Consumer>{render}</ThemeContext.Consumer>;
};

export default Header;
