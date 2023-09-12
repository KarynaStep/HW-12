import React from "react";
import CardUser from "../../components/CardSection/CardUser";
import { LanguageContext } from "../../contexts";
import { LANGUAGE, LANGUAGE_NAV_MENU } from "./../../constants";

const Home = () => {
  const render = ([language]) => 
      <div>
        <h1>
          {language === LANGUAGE.ENG
            ? LANGUAGE_NAV_MENU.HOME
            : LANGUAGE_NAV_MENU.HOME_UKR}
        </h1>
        <CardUser />
      </div>
  return <LanguageContext.Consumer>{render}</LanguageContext.Consumer>;
};

export default Home;
