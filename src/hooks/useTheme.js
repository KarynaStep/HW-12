import { useState } from "react";
import { THEMES } from "../constants";


const useTheme = (authTheme) => {
  const [theme, setTheme] = useState(authTheme);
  const changeTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };
  return [ theme, changeTheme ];
};

export default useTheme;