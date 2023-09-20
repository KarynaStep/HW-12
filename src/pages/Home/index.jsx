import React, {useContext, useState} from "react";
import CardUser from "../../components/CardSection/CardUser";
import { LANGUAGE, LANGUAGE_NAV_MENU, THEMES } from "./../../constants";
import { LanguageContext, ThemeContext } from "../../contexts";
import LearnHooks from "../../components/LearnHooks";
import StopWatchHooks from "../../components/StopWatchHooks";


const styleMap = {
  [THEMES.LIGHT]: { backgroundColor: "#eee", color: "#222" },
  [THEMES.DARK]: { backgroundColor: "#222", color: "#eee" },
};

const Home = () => {
  const [valueInput, setValueInput] = useState(10);
  const [language,]   = useContext(LanguageContext)
  const [theme] = useContext(ThemeContext)
  
  const handeleValue = ({ target: { value } }) => {
    setValueInput(value);
  }
  const handleLogValue = () => {
  console.log(Number(valueInput))
}
  return (
    <div style={styleMap[theme]}>
      <h1>
        {language === LANGUAGE.ENG
          ? LANGUAGE_NAV_MENU.HOME
          : LANGUAGE_NAV_MENU.HOME_UKR}
      </h1>
      <h2>
        value = {valueInput}
        <input type="range" value={valueInput} onChange={handeleValue} />
        <button onClick={handleLogValue}>log value</button>
      </h2>
      <LearnHooks />
      <StopWatchHooks />
      <CardUser />
    </div>
  );
}
  

export default Home;
