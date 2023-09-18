import React from 'react';
import { withLanguage } from "../HOCs";

const SwitchLanguage = ({language, changeLanguage}) => {
  return( <button onClick={changeLanguage}> {language}</button>
  );
  
};

export default withLanguage(SwitchLanguage);
