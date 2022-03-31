import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import {AppLanguage} from "../const/app-languages";
import App from "../App";
import {messages} from "./LocalizedIntl";

export const LanguageSwitcher: React.FC = () => {
    const { pathname } = useLocation();

    const getMatchingRoute = (language: string) => {
        /**
         * Get the key of the route the user is currently on
         */

        if(!Object.keys(messages).includes(language)){
            console.log("Redirecting from Language Switcher")
            return "/404"
        }

        //const route = lang !== undefined ? pathname.substring(3) : pathname;
        const x = pathname.split("/");
        const route = Object.values(AppLanguage).every((value) => x[1] !== value) ?
            pathname : pathname.substring(3);

        const routeList = route.split('/');
        const m = messages[language];

        console.log("Path_" + routeList[1]);

        const newRoute = routeList.reduce(
            (prev, val) => Object.keys(m).includes("Path_" + val) ?
                prev + `/${m["Path_" + val]}`:
                val === "" ? prev : prev +`/${val}`,
            ""
        )
        console.log(`old route ${route}`)
        console.log(`new route ${newRoute}`);
        // const routeKey = Object.keys(messages).find(key => messages[key] === route);

        /**
         * Find the matching route for the new language
         */
        // const matchingRoute = appStrings[language][routeKey];

        /**
         * Return localized route
         */
        return `/${language}` + newRoute;
    }

    return (
        <ul>
            <li key={AppLanguage.English}>
                <NavLink
                    to={getMatchingRoute(AppLanguage.English)}
                >
                    {AppLanguage.English}
                </NavLink>
            </li>

            <li key={AppLanguage.Slovak}>
                <NavLink
                    to={getMatchingRoute(AppLanguage.Slovak)}
                >
                    {AppLanguage.Slovak}
                </NavLink>
            </li>
        </ul>
    );
};
