import React from 'react';
import { LanguageContext } from "../../contexts";

const SwitchLanguage = () => {
  const render = ([language, changeLanguage]) => (
    <button onClick={changeLanguage}> {language}</button>
  );
  return <LanguageContext>{render}</LanguageContext>;
};

export default SwitchLanguage;
