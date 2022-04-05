import messages_en from "../Localization/en.json";
import messages_sk from "../Localization/sk.json";
import React, {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useCookies} from "react-cookie";
import {IntlProvider} from "react-intl";
import App from "../App";
import {flattenMessages} from "../utils/flattenMessage";


export const messages: { [index: string]: any } = {
    'en': flattenMessages(messages_en),
    'sk': flattenMessages(messages_sk)
}

export const LocalizedIntl: React.FC = () => {
    const { lang } = useParams();
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(['lang']);

    const l = Object.keys(messages).includes(lang ?? "") ? lang!! : "en";

    useEffect(() => {
        console.log("In use effect", lang)

        if(!Object.keys(messages).includes(lang ?? "")){
            const notFoundLanguage = cookie.lang === undefined ? "en" : cookie.lang
            navigate(`/${notFoundLanguage}/404`)
        } else {
            setCookie("lang", lang);
        }

    }, [lang])

    return (
        <IntlProvider
            locale={l}
            messages={messages[l]}
            defaultLocale={"en"}
        >
            <App/>
        </IntlProvider>
    )
}
