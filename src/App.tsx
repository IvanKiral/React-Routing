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
import { NotFound } from './components/NotFound';

function App() {
    const { formatMessage } = useIntl();

  return (
    <div className="App">
          <LanguageSwitcher/>
        <div>
          <ul>
            <li>
                <Link to={``}>{formatMessage({id:"header_home_link_title"})}</Link>
            </li>
            <li>
              <Link to={`${formatMessage({id:"Routing.about-us"})}`}>{formatMessage({id:"header_about_link_title"})}</Link>
            </li>
            <li>
              <Link to={`movies`}>{formatMessage({id:"header_movies_link_title"})}</Link>
            </li>
          </ul>

          <hr />

            <Routes>
            <Route path="" element={<Home />} />
            <Route path={`${formatMessage({id:"Routing.about-us"})}`} element={<About />} />
            <Route path="/movies" element={<Movies />} />
                <Route path={"/movies/:codename"} element={<Movie />} />
                <Route path={"*"} element={<Navigate to={"/404"} />}/>
                <Route path="404" element={<NotFound />}/>
            </Routes>

        </div>
    </div>
  );
}

export default App;
