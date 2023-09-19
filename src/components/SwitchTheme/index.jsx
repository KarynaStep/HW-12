import React, { useContext } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";
import { THEMES } from "../../constants";
import { ThemeContext } from "../../contexts";

const SwitchTheme = (props) => {
  const [ theme, changeTheme ] = useContext(ThemeContext)
  return(
    <div onClick={changeTheme}>
      {theme === THEMES.LIGHT ? <DarkMode /> : <LightMode />}
    </div>
  )
}

export default SwitchTheme;
