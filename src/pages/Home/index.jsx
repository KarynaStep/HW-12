import React from "react";
import CardUser from "../../components/CardSection/CardUser";
import { LANGUAGE, LANGUAGE_NAV_MENU } from "./../../constants";
import { withLanguage } from "./../../components/HOCs";


const Home = ({language}) => 
      <div>
        <h1>
          {language === LANGUAGE.ENG
            ? LANGUAGE_NAV_MENU.HOME
            : LANGUAGE_NAV_MENU.HOME_UKR}
        </h1>
        <CardUser />
      </div>

export default withLanguage(Home);
