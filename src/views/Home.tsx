import {FormattedDate, FormattedMessage} from "react-intl";
import React from "react";

export const Home: React.FC = () => {
    return (
        <div>
            <h2><FormattedMessage id="Header.homeLinkTitle" /></h2>
            <FormattedDate
                value={new Date()}
                year="numeric"
                month="long"
                weekday="long"
                day={"numeric"}
            >
            </FormattedDate>
        </div>
    );
}
