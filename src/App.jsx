import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { UserContext, ThemeContext, LanguageContext } from "./contexts";

import Header from './components/Header';
import Footer from './components/Footer';
import SignInForm from "./components/forms/SignInForm";

import Home from './pages/Home';
import UsersPage from './pages/UsersPage';
import Page404 from './pages/Page404';
import LoaderPage from './pages/LoaderPage';
import UsersBlock from './pages/LoaderPage/UsersBlock';
import EventsBlock from './pages/LoaderPage/EventsBlock';
import ProductsBlock from './pages/LoaderPage/ProductsBlock';
import FormsPage from './pages/FormsPage';

import { THEMES, LANGUAGE } from './constants';
import LearnHooks from './components/LearnHooks';
import StopWatchHooks from './components/StopWatchHooks';


const App = () => {
  const [user, setUser] = useState({
    id: 1,
    firstName: "Brad",
    lastName: "Pitt",
    isSelect: false,
    avatar: "https://cdn-icons-png.flaticon.com/128/3641/3641963.png",
  });
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const [language, setLanguage] = useState(LANGUAGE.ENG);

  const changeTheme = () => {
    setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  };
  const changeLanguage = () => {
    setLanguage(language === LANGUAGE.ENG ? LANGUAGE.UKR : LANGUAGE.ENG);
  };

  const selectorUser = (id) => {
    setUser({ ...user, isSelect: !user.isSelect });
  };

  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      <LanguageContext.Provider value={[language, changeLanguage]}>
        <UserContext.Provider value={{ user, selectorUser: selectorUser }}>
          <BrowserRouter>
            <Header />
            <main >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<FormsPage />} />
                <Route path="/sign-in" element={<SignInForm />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/loader" element={<LoaderPage />}>
                  <Route path="users" element={<UsersBlock />} />
                  <Route path="events" element={<EventsBlock />} />
                  <Route path="products" element={<ProductsBlock />} />
                </Route>
                <Route path="*" element={<Page404 />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </UserContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};


export default App;
