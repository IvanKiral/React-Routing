import React from "react";
import {useLocation} from "react-router";
import {useCookies} from "react-cookie";
import {Navigate} from "react-router-dom";

export const DefaultNavigate: React.FC = () => {
    const {pathname} = useLocation()
    const [ cookie ] = useCookies(['lang']);
    const lang = cookie.lang === undefined ? 'en' : cookie.lang;

    return (
        <Navigate to={`${lang + pathname}`} />
    )
}
