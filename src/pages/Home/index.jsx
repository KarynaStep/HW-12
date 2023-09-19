import React, {useContext} from "react";
import CardUser from "../../components/CardSection/CardUser";
import { LANGUAGE, LANGUAGE_NAV_MENU } from "./../../constants";
import { LanguageContext } from "../../contexts";



const Home = () => {
  const { language } = useContext(LanguageContext)
  return (
    <div>
        <h1>
          {language === LANGUAGE.ENG
            ? LANGUAGE_NAV_MENU.HOME
            : LANGUAGE_NAV_MENU.HOME_UKR}
        </h1>
        <CardUser />
      </div>
  )
}
  

export default Home;
