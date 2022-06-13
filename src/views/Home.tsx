import {FormattedDate, FormattedMessage, useIntl} from "react-intl";
import React from "react";
import {messages} from "../components/LocalizedApp";

export const Home: React.FC = () => {
    const { locale } = useIntl();
    return (
        <div>
            <h2><FormattedMessage id="Header.homeLinkTitle" /></h2>
            <FormattedDate
                value={new Date()}
                year={messages[locale]['Date.year']}
                month={messages[locale]['Date.month']}
                weekday={messages[locale]['Date.weekday'] === "undefined" ? undefined : messages[locale]['Date.weekday']}
                day={messages[locale]['Date.day']}
            >
            </FormattedDate>
        </div>
    );
}
