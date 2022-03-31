import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Link,
    Routes,
    Router,
    Route, BrowserRouter, useParams, useLocation, Navigate, Outlet
} from "react-router-dom";
import {LanguageSwitcher} from "./components/LanguageSwitcher";
import {AppLanguage} from "./const/app-languages";
import {FormattedDate, FormattedMessage, useIntl} from "react-intl";
import {deliveryClient} from "./utils/client";
import {Elements, IContentItem} from "@kentico/kontent-delivery";
import {ReactComponent} from "*.svg";
import {Home} from "./views/Home";
import {About} from "./views/About";
import {Movies} from "./views/Movies";
import {Movie} from "./views/Movie";

function App() {
    const { formatMessage } = useIntl();

  return (
    <div className="App">
          <LanguageSwitcher/>
        <div>
          <ul>
            <li>
                {}
              <Link to={``}>{formatMessage({id:"Header.homeLinkTitle"})}</Link>
            </li>
            <li>
              <Link to={`${formatMessage({id:"Routing.about-us"})}`}>{formatMessage({id:"Header.aboutLinkTitle"})}</Link>
            </li>
            <li>
              <Link to={`movies`}>{formatMessage({id:"Header.contactsLinkTitle"})}</Link>
            </li>
          </ul>

          <hr />

            <Routes>
            <Route path="" element={<Home />} />
            <Route path={`${formatMessage({id:"Routing.about-us"})}`} element={<About />} />
            <Route path="/movies" element={<Movies />} />
                <Route path={"/movies/:codename"} element={<Movie />} />
                <Route path={"*"} element={<Navigate to={"/404"} />}/>
            </Routes>

        </div>
    </div>
  );
}

export default App;
