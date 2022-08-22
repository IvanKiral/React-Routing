import messages_en from "../localization/en.json";
import messages_sk from "../localization/sk.json";
import React, {useEffect, useMemo} from "react";
import {IntlProvider} from "react-intl";
import App from "../App";
import Cookies from "universal-cookie";

export const messages: { [index: string]: any } = {
    'en': messages_en,
    'sk': messages_sk
}

interface LocalizedAppProps{
    lang: string
}

export const LocalizedApp: React.FC<LocalizedAppProps> = ({lang}) => {
    const cookies = useMemo(() => new Cookies(document.cookie), []);

    useEffect(() => {
        cookies.set('lang', lang, { path: '/' });
    }, [lang, cookies])

    return (
        <IntlProvider
            locale={lang}
            messages={messages[lang]}
            defaultLocale={"en"}
        >
            <App/>
        </IntlProvider>
    )
}
