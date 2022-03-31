import React from "react";
import {useCookies} from "react-cookie";
import {IntlProvider} from "react-intl";
import {messages} from "./LocalizedIntl";
import {LocalizedLanguage} from "./LocalizedLanguage";

export const NotFound: React.FC = () => {
    const [cookie] = useCookies(['lang']);
    const lang = cookie.lang === undefined ? 'en' : cookie.lang

    return (
        <IntlProvider
            locale={lang}
            messages={messages[lang]}>
            <LocalizedLanguage/>
        </IntlProvider>
    )
}
