import React from "react";
import {useIntl} from "react-intl";

export const LocalizedLanguage: React.FC = () => {
    const { formatMessage } = useIntl();
    return(
        <p>
            {formatMessage({id: "NotFound"})}
        </p>
    )
}
