import React, { useContext } from "react";
import { LanguageContext } from "../../contexts";

const SwitchLanguage = (props) => {
  const [ language, changeLanguage ] = useContext(LanguageContext);
  return <button onClick={changeLanguage}> {language}</button>;
};

export default SwitchLanguage;
