import React from 'react';
import './App.css';
import {
    Link,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import {LanguageSwitcher} from "./components/LanguageSwitcher";
import {useIntl} from "react-intl";
import {Home} from "./views/Home";
import {About} from "./views/About";
import {Movies} from "./views/Movies";
import {Movie} from "./views/Movie";

/*
 Pros:
  - also easy setup
  - works well with changing language in URL
  - Seems to easily work with date
  - Under Yahoo!
 Cons:
   - bigger package size
   - BSD-3-Clause ?
 */

/*
These two licenses are very similar, with the key exception of the BSD 3’s non-endorsement clause,
which prohibits promotion of any derived work using the name of the license or its authors.
In addition, the language of the MIT License is simpler and shorter.

If you plan to copy, modify, or distribute any code licensed under BSD, you must include:
 - The full text of the license
 - The original copyright notice
 */

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
              <Link to={`movies`}>{formatMessage({id:"Header.movieLinkTitle"})}</Link>
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
